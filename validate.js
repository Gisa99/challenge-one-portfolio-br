const formulario = document.getElementById('form');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const assuntoInput = document.getElementById('assunto');
const span = document.querySelectorAll('.span-required');
const campos = document.querySelectorAll('.required');
const emailRegex = /^\w+[-+.']\w+([-.]\w+)*\.\w+([-.]\w+)*$/;



nomeInput.addEventListener("click", (event) =>{
   event.preventDefault();
   nomeValidar(); 
});

emailInput.addEventListener("click", (event) =>{
    event.preventDefault();
    emailValidar();  
 });

 assuntoInput.addEventListener("click", (event) =>{
    event.preventDefault();
    assuntoValidar();
 });
 
 function validar(){
    nomeValidar();
    emailValidar();
    assuntoValidar();
    
 }


 function nomeValidar(){

    const nome = nomeInput.value

    if(nome === ""){
       error(0);

        
    }
    else{
        removeError(0);

    }
 }

 function emailValidar(){
   if(emailInput.value.indexOf("@") == -1 || emailInput.value.indexOf(".") == -1 || (emailInput.value.indexOf(".")- emailInput.value.indexOf("@") == 1)){
      error(1)
   }else{
    removeError(1)
   }
   
 }

 function assuntoValidar(){
    const assunto = assuntoInput.value

    if(assunto === ""){
       error(2);

        
    }
    else{
        removeError(2);

    }
 }

 
 function error(index){
    span[index].style.display = 'block';
    campos[index].style.border = '2px solid #ff1212';
    
 }
 
 function removeError(index){
    span[index].style.display = ''; 
    campos[index].style.border = 'none';
 }