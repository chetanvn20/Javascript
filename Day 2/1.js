console.log("Hey this is console.log function")
console.warn("This is warn function")
console.error("This is error")
var abc = [["Chetan","Narkhede"],["Rushikesh","Pawar"],["omkar","Jadhav"]]
console.table(abc)
var obj1 = { firstname : "Chetan" , lastname : "Narkhede" }
console.info(obj1)

console.log("Var examples")
var a = "chetan"
console.log(a, "=" , typeof(a))

var b = 21
console.log("b = ", b , typeof(b))

console.log("let Examples")
{
    b = 31
    console.log("b = ", b, "local scope i.e. let ")
}

console.log("const Examples")
const c = 80
console.log(c)
c = 10