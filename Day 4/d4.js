function even()
{
    var x = document.getElementById('1').value
    if ( x % 2 == 0 )
    {
        console.log("Number is even.")
        alert("Number is Even")
    }
    else
    {
        console.log("number is odd")
        alert("Number is odd")
    }
}

function two()
{
    var a = prompt("Enter OS name and version")
    var r = a.split()
    console.log('OS name is ${r[0]} and version is ${r[1]}')
}

function grades()
{
    var marks = document.getElementById('4').value
    if(marks <= 100 && marks >= 80)
    {
        console.log("Marks are ",marks,"Grades are A")
    }
    else if(marks <= 80 && marks >= 60)
    {
        console.log("Marks are ",marks,"Grades are B")
    }
    else if(marks <= 60 && marks >= 40)
    {
        console.log("Marks are ",marks,"Grades are C")
    }
    else if(marks < 40)
    {
        console.log("Fail")
    }
}