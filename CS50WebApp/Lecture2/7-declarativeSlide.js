const SLIDE = {
    title: 'React is Declarative',
    bullets: [
        'Imperative vs Declarative',
        "The browser APIs aren't fun to work with",
        "React allows us to write what we want, and the library will...",
    ],
}

function createSlide(slide) {
    return (
        <Slide>
            <h1> title={SLIDE.title} </h1>
            <ul>
            {SLIDE.bullets.map(bullet => <li>{bullet}</li>)}
            </ul>
        </Slide>
    )
}
/*
Declarative coding just makes sense, plus its easier to maintain

React Is Easily Componentized
o Breaking a complex problem into discrete components
o Can reuse these components
    - Consitency
    - Iteration speed
o React's declarative nature makes it easy to customize components
*/