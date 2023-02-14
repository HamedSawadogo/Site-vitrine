
navigation=document.querySelector('.navigation');
let blocitems=document.querySelector('.items-bloc');
window.addEventListener('scroll',()=>{
    blocitems.style.marginTop='0px';
    if(window.scrollY>450){
        navigation.style.transition='0.3s all';
       navigation.style.top='0px';
    }else{
        navigation.style.top='-35px';
         blocitems.style.marginTop='20px';
    }
});
//gestion du formaulaire
let form=document.getElementById('form');
let nom=document.getElementById('name');
let email=document.getElementById('email');
let btnvalidate=document.getElementById('btnSubmit');
let message=document.getElementById('message');

const validateMessage=()=>{
        message.addEventListener('input',()=>{
        let messageValue=document.getElementById('message').value;
        console.log(messageValue);
        if(messageValue.length>2)
        {    message.style.borderColor='green';
            return true;
        }  
        else {  message.style.borderColor='red';}
    })
   return false;
};
//
const  testEmail=(email)=>{
    return email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
}
const validateEmail=()=>{
  email.addEventListener('input',(e)=>{
    let emailValue=e.target.value;
    let small=email.nextElementSibling;
    if(!testEmail(emailValue)){
        small.classList.add('text-danger');
        small.innerHTML='veillez entrer une  adresse email valide';
        email.style.borderColor='red';
        return true;
    }else{
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        email.style.borderColor='green';
        small.innerHTML='votre adresse email est correcte';
    }
  })
  return false;
} 
//
const validateName=()=>{
  nom.addEventListener('input',(e)=>{
    let nameValue=e.target.value;
    let small=nom.nextElementSibling;
    if(nameValue.length<2){
        small.classList.add('text-danger');
        small.innerHTML='veillez entrer un nom correct';
        nom.style.borderColor='red';
        return true;
    }else{
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        nom.style.borderColor='green';
        small.innerHTML='votre nom est correct';
    }
    });
    return true;
}
validateMessage();
validateEmail();
validateName();

btnvalidate.disabled=true;
let submit=false;
if(!validateMessage()&&!validateEmail()&&!validateName()){
    submit=true;
    btnvalidate.disabled=false;
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateMessage();
    validateEmail();
    validateName();
    console.log(validateEmail());
    console.log(validateMessage());
    console.log(validateName());
})




