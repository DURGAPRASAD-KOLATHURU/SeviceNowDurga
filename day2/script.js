function leapYear()
{
    let year = parseInt(prompt("Enter the year"))
    if(year%4==0 && (year %100 !=0 || year % 400 ==0))
      alert("The given year "+year+" is leap year")
    else
    alert("The given year "+year+" is not leap year")
}
function checkGrade()
{
    let m = parseInt(prompt("Enter the Marks of the student from 0 to 100"))
    if(m<0 || m>100)
    alert("Please Enter valid Marks")
    else
    {
        if(m > 89)
        alert('You Got "A" Grade')
        else if(m >79 && m<90)
        alert('You Got "B" Grade')
        else if(m >69 && m< 80 )
        alert('You Got "C" Grade')
        else if(m >59 && m< 70 )
        alert('You Got "D" Grade')
        else
        alert('You Got "F" Grade')
    }
}
let a = "I am enjoying my training"
let b = a.indexOf("my")
let c = a.indexOf("m")
let d = a.substring(0,5)
let e = a.replace("training","journey")
console.log(b)
console.log(c)
console.log(d)
console.log(e)