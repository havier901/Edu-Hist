import { useEffect, useContext, useState } from "react";

import { ExpensesContext } from "../store/expenses-context";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpenses() {
  const [isFetching, setIsFetchiing] = useState(true);
  const [error, setError] = useState();

  const expensesCtx = useContext(ExpensesContext);
  //instead of fetching data from backend each time, we are storing it while also continuing to use context
  

  useEffect(() => {
    async function getExpenses() {
      setIsFetchiing(true);
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError('Could not fetch expenses.');
        setIsFetchiing(false);
      }
      setIsFetchiing(false);
    }

    getExpenses(); //Workaround to avoid turning useEffect function into async function
  }, []);


  if (error && !isFetching) {
    return <ErrorOverlay message={error} />
  }

  if (isFetching) {
    return <LoadingOverlay/>
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" fallbackText={"No expenses registered for the last 7 days."}/>
  );
}

export default RecentExpenses;
