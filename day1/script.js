
function fun1()
{
    let a = document.getElementById("mainDiv")
    a.style.color="red"

}
function fun2()
{
    let b = document.getElementsByClassName("para")
    if(b[0].style.color=="black" || b[0].style.color=="")
    {
        b[0].style.color="yellow"
        b[1].style.color="orange"
    }
    else{
        b[0].style.color="black"
        b[1].style.color="black"
    }
}
function fun3()
{
    let c = document.getElementById("box1")
    c.style.background="red"
}
function fun4()
{
    let d = document.getElementById("box2")
    d.style.background="green"
}
function fun5()
{
    let e = document.getElementById("box3")
    e.style.backgroundImage="url('./images/oo.jpg')"
}
function fun6()
{
    let f = document.getElementById("box4")
    f.style.height="50px"
    f.style.width="80px"
}