// select elements
let questions = document.querySelectorAll(".q i");
let answers = document.querySelectorAll(".answer");
// loop on elements
for(let i=0; i< questions.length; i++){
    questions[i].addEventListener("click",()=>{
        if(answers[i].style.display==="none"){
            answers[i].setAttribute("style","display:block")
            questions[i].setAttribute("style","transform:rotate(45deg); transition: .3s")
        }else{
            answers[i].setAttribute("style","display:none")
            questions[i].setAttribute("style","transform:rotate(0deg); transition: .3s")
        }
    })
}
// --------------------------------------------------------------------

//  sign in validation
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let sign = document.getElementById("sign");
let emailError = document.querySelector(".emailError")
let passError = document.querySelector(".passError")

 sign.onclick = ()=>{
    if(email.value === ""){
        email.setAttribute("style","border-bottom:1px solid orange")
        emailError.setAttribute("style","display: block")
    }
    else{
        false
    }
    if(pass.value === ""){
        pass.setAttribute("style","border-bottom:1px solid orange");
        passError.setAttribute("style","display: block")
    }else{
        false
    }
 }