function map(arr, fn) {
    const newArr = []

    arr.forEach(function(val) {
        newArr.push(fn(val))
    })

    return newArr
}
                                        //for (let i = 0; i < arr.length; i++) {
                                        //    let val = arr[i]
                                        //    newArr.push(fn(val))
                                        //}

function addOne(num) {
    return num + 1
}

const x = [0, 1, 2, 3]

console.log(map(x, addOne))

/*
arr.forEach() takes the place of the for loop to iterate through the array


*/