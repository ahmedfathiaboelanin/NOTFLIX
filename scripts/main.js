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
// change img
let pic = document.querySelector(".view");
let picArr = ["https://i.ytimg.com/vi/Z5FzZ080-do/hqdefault.jpg","https://i.ytimg.com/vi/uoX5aKuspEE/hqdefault.jpg","https://d29mtkonxnc5fw.cloudfront.net/images/tzV1eXXdkLklpSD4qAxbWg_cover.jpg"]
    setInterval(() =>{
        let num=Math.floor(Math.random() * picArr.length);
        pic.src= picArr[num];
    },1000);
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
