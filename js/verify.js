const angleOne=document.querySelector("#angle-one");
const angleTwo=document.querySelector("#angle-two");
const angleThree=document.querySelector("#angle-three");
const check=document.querySelector("#check");
const result=document.querySelector(".result");



function showMessage(msg)
{
    result.innerText=msg;
}

check.addEventListener("click",function triangle()
{
    let One=Number(angleOne.value);
    let Two=Number(angleTwo.value);
    let Three=Number(angleThree.value);
    console.log(One,Two,Three);


    if(One && Two && Three)
    {
       if(One + Two + Three===180)
       {
           showMessage("It is a perfect triangle");
       }
       else{
           showMessage("It is not a triangle");
       }
    }
    else
    {
        showMessage("Fill all the inputs");
    }
})