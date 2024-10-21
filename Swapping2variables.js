function swap(x,y){
    x=x+y
    y=x-y
    x=x-y
    console.log(`a value is ${x} and b value is ${y}`)
}
let x=5,y=2
console.log("Before swapping")
console.log(`a value is ${x} and b value is ${y}`)
console.log("After swapping")
swap(x,y)

