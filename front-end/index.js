


// bloc de navigation
let navigation=document.querySelector('.navigation');

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
})