function loop1()
{
    let arr =[]
    for(let i = 1; i<=100; i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            console.log("fizzbuzz")
            continue;
        }
        if(i % 3 == 0 )
        {
            console.log("fizz")
            continue;
        }
        if(i % 5 == 0)
        {
            console.log("buzz")
            continue;
        }
        console.log(i)
        
    }
}

function destruct()
{
    const student = {
        name: "Heilsinki",
        age: 24,
        projects: {
            diceGame:"Two player Dicegame Using JavaScript"
        }
    }
   console.log("Name: ", student.name)
   console.log("Age: ", student.age)
   console.log("Projects: ", student.projects.diceGame)
}

function cart()
{
    shoppingList = ["corn","Salt","Biscuits","Tea powder"]
    shoppingBasket = shoppingList
    console.log(shoppingBasket)

    shoppingList.push("Coffee Powder")
    shoppingList.push("Spices")
    console.log(shoppingBasket)
}

function add()
{
    let x = document.getElementById(1).value
    x = parseInt(x)
    let y = document.getElementById(2).value
    y = parseInt(y)
    document.getElementById(3).innerHTML = x + y
}
function sub()
{
    let x = document.getElementById(1).value
    x = parseInt(x)
    let y = document.getElementById(2).value
    y = parseInt(y)
    document.getElementById(3).innerHTML = x - y
}
function mul()
{
    let x = document.getElementById(1).value
    x = parseInt(x)
    let y = document.getElementById(2).value
    y = parseInt(y)
    document.getElementById(3).innerHTML = x * y
}
function div()
{
    let x = document.getElementById(1).value
    x = parseInt(x)
    let y = document.getElementById(2).value
    y = parseInt(y)
    document.getElementById(3).innerHTML = x / y
}
function sqrt1()
{
    let x = document.getElementById(1).value
    document.getElementById(3).innerHTML = Math.sqrt(x)
}

function reward()
{
    let r = document.getElementById(5).value
    if(r >= 0 && r <= 5000 )
    console.log( r * 0.02 )
    else if(r >= 5001 && r <= 10000 )
    console.log( r * 0.05 )
    else if(r >= 10001 && r <= 20000 )
    console.log( r * 0.07 )
    else if(r >= 20000 )
    console.log( r * 0.1 )
}

function q6()
{
    let a = prompt("Enter Number")
    if(a < 100)
    q6()    
}



function prime(max)
{
    var store  = [], i, j, primeno = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primeno.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primeno;
}
console.log(prime(15));

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
