import os

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import apology, login_required, lookup, usd

# Import datetime?
import datetime

# Configure application
app = Flask(__name__)

# Custom filter
app.jinja_env.filters["usd"] = usd

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///finance.db")

STOCKS = []
SHARECOUNT = {}
STOCKPRICE = {}
STOCKVALUE = {}


@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/")
@login_required
def index():
    """Show portfolio of stocks"""
    TOTALSTOCKVALUE = 0
    stocks = db.execute(
        "SELECT DISTINCT symbol FROM purchaselog WHERE user_id = ? AND transactions = ?",
        session["user_id"],
        "buy",
    )
    for row in stocks:
        symbol = row["symbol"]
        STOCKS.append(symbol)

    for stock in STOCKS:
        rows = db.execute(
            "SELECT SUM(shares) FROM purchaselog WHERE symbol = ? AND user_id = ?",
            stock,
            session["user_id"],
        )

        SHARECOUNT[stock] = rows[0]["SUM(shares)"]

        data = lookup(stock)
        STOCKPRICE[stock] = data["price"]
        value = STOCKPRICE[stock] * SHARECOUNT[stock]
        TOTALSTOCKVALUE += value
        STOCKVALUE[stock] = usd(value)

    rows = db.execute("SELECT * FROM users WHERE id = ?", session["user_id"])
    CASH = rows[0]["cash"]

    TOTALFUNDS = CASH + TOTALSTOCKVALUE

    return render_template(
        "index.html",
        stocks=STOCKS,
        sharecount=SHARECOUNT,
        stockprice=STOCKPRICE,
        stockvalue=STOCKVALUE,
        cash=usd(CASH),
        totalstockvalue=usd(TOTALSTOCKVALUE),
        totalfunds=usd(TOTALFUNDS),
    )


@app.route("/buy", methods=["GET", "POST"])
@login_required
def buy():
    """Buy shares of stock"""
    if request.method == "POST":
        symbol = request.form.get("symbol")
        if not symbol or symbol == None:
            return apology("Please enter a valid stock symbol")

        shares = request.form.get("shares")

        if shares.isnumeric():
            shares = int(shares)
        else:
            return apology("Please enter a valid number for purchase")

        if not shares or shares < 1:
            return apology("Please enter a valid number for purchase")

        data = lookup(symbol)
        if not data:
            return apology("Please enter a valid stock symbol")

        price = data["price"]

        rows = db.execute("SELECT * FROM users WHERE id = ?", session["user_id"])
        cash = rows[0]["cash"]

        cost = shares * price

        date = datetime.datetime.now()

        newcash = cash - cost

        if newcash < 0:
            return apology("You cannot afford this purchase")

        db.execute(
            'INSERT INTO purchaselog (symbol, shares, price, date, "transactions", user_id) VALUES (?, ?, ?, ?, ?, ?)',
            symbol,
            shares,
            cost,
            date,
            "buy",
            session["user_id"],
        )

        db.execute("UPDATE users SET cash = ? WHERE id = ?", newcash, rows[0]["id"])

        return redirect("/")

    else:
        rows = db.execute("SELECT * FROM users WHERE id = ?", session["user_id"])
        CASH = rows[0]["cash"]
        return render_template("buy.html", funds=usd(CASH))


@app.route("/history")
@login_required
def history():
    """Show history of transactions"""
    rows = db.execute("SELECT * FROM purchaselog WHERE user_id = ?", session["user_id"])
    return render_template("history.html", rows=rows)


@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":
        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("must provide username", 403)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password", 403)

        # Query database for username
        rows = db.execute(
            "SELECT * FROM users WHERE username = ?", request.form.get("username")
        )

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(
            rows[0]["hash"], request.form.get("password")
        ):
            return apology("invalid username and/or password", 403)

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")


@app.route("/quote", methods=["GET", "POST"])
@login_required
def quote():
    if request.method == "POST":
        symbol = request.form.get("symbol")

        if not symbol:
            return apology("Please enter a vlaid symbol")

        data = lookup(symbol)

        if not data:
            return apology("Please enter a valid symbol")

        return render_template("quote.html", quote_details=data)
    else:
        return render_template("quote.html")


@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user"""
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        confirmation = request.form.get("confirmation")

        rows = db.execute(
            "SELECT * FROM users WHERE username = ?", username
        )  # Watching for sql injection. Aka "sanitizing"
        if not username or len(rows) > 0:
            return apology("Enter a uniqe username")

        if not password or password != confirmation:
            return apology("Passwords must match & be non-empty")

        # Insert the new user using generate_password_hash
        hash = generate_password_hash(password)
        db.execute("INSERT INTO users (username, hash) VALUES (?, ?)", username, hash)

        # Redirect after POST, best practice
        return redirect("/")
    else:
        return render_template("register.html")


@app.route("/deposit", methods=["GET", "POST"])
@login_required
def deposit():
    if request.method == "POST":
        deposit = request.form.get("deposit")

        if not deposit:
            return apology("Please enter a valid deposit")

        if deposit.isnumeric():
            deposit = int(deposit)
        else:
            deposit = float(deposit)

        if deposit <= 0:
            return apology("Please enter a valid deposit")

        rows = db.execute("SELECT * FROM users WHERE id = ?", session["user_id"])
        cash = rows[0]["cash"]

        funds = cash + deposit

        db.execute("UPDATE users SET cash = ? WHERE id = ?", funds, session["user_id"])
        return redirect("/")
    else:
        rows = db.execute("SELECT * FROM users WHERE id = ?", session["user_id"])
        CASH = rows[0]["cash"]
        return render_template("deposit.html", funds=usd(CASH))


@app.route("/sell", methods=["GET", "POST"])
@login_required
def sell():
    if request.method == "POST":
        symbol = request.form.get("symbol")
        if not symbol or symbol == None:
            return apology("Please enter a valid stock symbol")

        shares = request.form.get("shares")
        shares = int(shares)

        if not shares or shares < 1:
            return apology("Please enter a valid number for transaction")

        if SHARECOUNT[symbol] < 1:
            return apology(f"You don't have any {symbol} stock")

        if SHARECOUNT[symbol] < shares:
            return apology(f"You don't have enough {symbol} stock")

        data = lookup(symbol)
        price = data["price"]

        rows = db.execute("SELECT * FROM users WHERE id = ?", session["user_id"])
        cash = rows[0]["cash"]

        profit = shares * price

        date = datetime.datetime.now()

        newcash = cash + profit

        # UPDATE TABLES
        negshares = shares * (-1)
        db.execute(
            "INSERT INTO purchaselog (symbol, shares, price, date, transactions, user_id) VALUES (?, ?, ?, ?, ?, ?)",
            symbol,
            negshares,
            profit,
            date,
            "sell",
            session["user_id"],
        )

        db.execute(
            "UPDATE users SET cash = ? WHERE id = ?", newcash, session["user_id"]
        )
        return redirect("/")

    else:
        rows = db.execute("SELECT * FROM users WHERE id = ?", session["user_id"])
        CASH = rows[0]["cash"]
        return render_template("sell.html", funds=usd(CASH), stocks=STOCKS)
