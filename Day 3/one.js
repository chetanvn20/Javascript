function myname()
{
    var x = prompt("Enter Your name: ")
    console.log(x)
}

function que2()
{
    console.log("String Functions")
    let y = "I am chetan! Javascript learner"
    console.log("Length: ", y.length)
    console.log("Index of 'am': ", y.lastIndexOf("am"))
    console.log(y.slice(5,11))
    console.log(y.toLowerCase())
    console.log(y.toUpperCase())
    console.log(y.charAt(5))

    console.log("Number Functions")
    var z = 12.3456
    console.log(z.toPrecision(3))

}

function que3()
{
    var w = prompt("Enter Age: ")
    if (w < 21)
    {
        console.log("Cannot Drink")
    }
    else{
        console.log("Can Drrink")
    }


}
