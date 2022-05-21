let base = document.querySelector("#base");
let height = document.querySelector("#height");
const check = document.querySelector("#check");
const result = document.querySelector(".result");


check.addEventListener('click',()=>
{
    if(base.value && height.value)
    {
        let answer = (base.value * height.value)/2;
        result.innerText="Area of triangle is "+answer;
    }
    else{
        result.innerText="Fill both of the input values";
    }
})