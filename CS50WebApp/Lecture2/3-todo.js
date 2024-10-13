class Todo {
    constructor (configuration) {
        this.text = configuration.text || 'New TODO'
        this.checked = false
    }

    render() {
        return (
            <li>
                <input type="checkbox" checked={this.checked} />
                <span>{this.text}</span>
            </li>
        )
    }
}

/*
React
o Allows us to write declarative views that "react" to changes in data
    automatically
o Allows us to abstract complex problems into smaller components
o Allows us to write simple code that is still performant

Imperative vs Declaritive
o How vs What
o Imperative programming outlines a series of steps to get to what you want
o Declarative programming just declares what you want
    o HTML is a declarative language
    o JavaScript is more imperative
*/