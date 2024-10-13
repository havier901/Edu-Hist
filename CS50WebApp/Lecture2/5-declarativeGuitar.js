const strings = ["E", "A", "D", "G", "B", "E"]

function Guitar() {
    return (
        <Guitar>
            {strings.map(note => <String note={note} />)}
        </Guitar>
    )
}

/*
React is Declarative
o Imperative vs Declarative
o The browser APIs aren't funt to work with (see Project 0)
o React allows us to write what we want, and the library
    will take care of the DOM manipulation
*/