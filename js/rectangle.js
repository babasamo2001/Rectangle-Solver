//import rectangle class
import Rectangle  from "./rectclass.js"

//create JS DOM Elements objects
const form=document.getElementById("form-body");
const propLength=document.getElementById("input-len");
const propBreadth=document.getElementById("input-bre");
const resultContainer=document.getElementById("result-container");
const result=document.getElementById("result-text");
const resetBtn=document.getElementById("btn-reset")
const backBtn=document.querySelector("#btn-back");
const alert=document.getElementById("alert-container");
 

//adding submit event listener to the form
form.addEventListener('submit',(e)=>{
    e.preventDefault();
 
    //creating rectangle object that gets area and perimeter
        const rec=new Rectangle(propLength.value,propBreadth.value);
        const Area=rec.getArea();
        const Perimeter=rec.getPerimeter();
        
 
 
    resultContainer.style.backgroundColor="white"
    alert.hidden=false;
    result.textContent=`Area of the rectangle is ${Area}, while its perimeter is ${Perimeter}`
    
})

//reset button handler
resetBtn.addEventListener('click',()=>{
    resultContainer.hidden=true;
    location.reload();
})

//back button handler
backBtn.addEventListener('click',(e)=>{
document.location.href="./"
})

 



