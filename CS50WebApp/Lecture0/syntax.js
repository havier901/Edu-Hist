const firstName = "Havier";
const lastName = 'Green'

const val = 42

const arr = [
    "string",
    42,
    function(){console.log('hi')}]

arr[2]()

for (let i = 0; i < arr.length; i++)
{
    console.log(arr[i])
}

/*
Types

o Dynamic typing
o Primitive types (no methods, immutable)
    - undefined
    - null
    - boolean
    - number
    - string
    - (symbol)
o Objects