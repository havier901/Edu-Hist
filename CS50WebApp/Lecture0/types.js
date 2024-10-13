const x = 42

console.log(typeof x)

console.log(typeof null)

/* 
Typecasting? Coercion

oExplicit vs Implicit coercion
    - const x = 42;
    - const explicit = String(x); // explicit === "42"
    - const implicit = x + ""; // implicit === "42"

o == vs. ===
    - == coerces the types
    - === requires equivalent types
    *Therefore never use ==, because you have to know every coersion, and so does everyone who
    reads your code.

Coercion cont.
o Which values are falsy?
    - undefined
    - null
    - false
    - +0, -0, NaN
    - ""
o Which values are truthy?
    - {}
    - []
    - Everything else

o Objects, Arrays, Functions, Objects
    - Everything beside primitive values is an object
    - Prototypal Inheritance (more on this later)

o Primitives vs Objects
    - Primitives are immutable
    - Objects are mutable and stored by reference

    - Passing by reference (object) vs. passing by value (primitive)
    */