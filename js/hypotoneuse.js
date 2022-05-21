let base = document.querySelector("#base");
let height = document.querySelector("#height");
const check = document.querySelector("#check");
const result = document.querySelector(".result");


function sumOfSquare(base,height)
{
    console.log(base*base+height*height);
    let value=base*base+height*height;
    return Number(value);
}

check.addEventListener('click',()=>
{
   const answerOne= sumOfSquare(Number(base.value),Number(height.value))
   
   if(base.value && height.value)
   {
       const answer=Math.sqrt(answerOne);
       console.log(answer)
       result.innerText="Hypoteneous is "+answer;
   }
   else
   {
       showMessage("Fill both of the input")
   }

})