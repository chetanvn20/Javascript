    var c = ["blue", "black", "yellow", "red"];

    function changeColor() {
        setTimeout(function loop() {
        document.bgColor = c.shift();
        if (c.length) {
            setTimeout(loop, 500);
        }
        }, 5000);
    }

    function start() {
        setInterval(changeColor(), 200);
    }


function table1()
{
    var x = document.getElementById(2).value
    x = parseInt(x)
    for(i=0;i<=10;i++)
    {
        c = x * i
        document.writeln(`${x} * ${i} = ${c} </br>`)
        
    }
}

function q3()
{
    let a = document.getElementById(4).value
    console.log(a)
    document.write(`Welcome ${a} </br></br>`)

    var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.write(h + ":" + m + ":" + s)
   //  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;

}
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }