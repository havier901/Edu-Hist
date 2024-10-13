const slides = [
    {
        title: "React",
        bullets: [
            "Allows us to write declarative views that 'React' to changes in data",
            "Allows us to abstrat complex problems into smaller components",
            "Allows us to write simple code that is still performant",
        ],
    },
    {
        title: "React is Declarative",
        bullets: [
            "Imperative vs Declarative",
            "The browser APIs aren't fun to work with",
            "React allows us to write what we want, and the library will take care of the DOM manipulation",
        ],
    },
    {
        title: "React is Easily Componentized",
        bullets: [
            "Breaking a complex problem into discrete components",
            "Can reuse these components",
            "React's declarative nature makes it easy to customize components",
        ],
    },
]

//TODO implememnt slideshow
const slideshow = (
    <div>
        {slides.map(slide => <Slide slide={slide} />)} 
    </div>
) //This function is a component                                          //^^^On line 31, the slide in brackets is our slide slide function below being passed in as an object
                                            //** gets invoked with anything you pass it as properties, thus slide={slide}

const Slide = slide => ( // declared Slide with a capital S is intentional, in JSX tags with a capital S get invoked like a function
    <div>
        <h1>{slide.title}</h1>
        <ul>
            {slide.bullets.map(bullet => <li>{bullet}</li>)}
        </ul>
    </div>
) // This function is a prop
/*
React is Performant
o We write what we want and React will do the hard work
o Reconciliation (an algorithm)
    - the process by which React syncs changes in app state to the DOM
    - Reconstruct the virtual DOM
    - Diffs the virtual DOM against the real DOM
    - Will only make the changes as needed ** (oversimplification)

Writing React
o JSX (JavaScript + XML)
    - XML-like syntax extension of JavaScript
    - Transpiles to JavaScript
    - Lowercase tags are treated as HTML/SVG tags
        - SVG = "scalable vector graphics"
    - Uppercase are treated as custom components
o Components are just functions
    - Returns a node (something React can render, e.g. a <div />, or <span>, or string, or number)
    - Receives an object of the properties that are passed to the element

o Props (Short for properties)
    - Passed as an object to a component and used to compute the returned node
    - Changes in these props will cause a recomputation of the returned node ("render")
    - Unlike in HTML, these can be any JS value
*/