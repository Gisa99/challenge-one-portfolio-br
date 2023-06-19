const formulario = document.getElementById('form');
const span = document.querySelectorAll('.span-required');
const campos = document.querySelectorAll('.required');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-] +@ [a-zA-Z0 -9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function setError(index){
    
    campos[index].style.border ='2px solid #ff1212';
    span[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border ='';
    span[index].style.display = '';   
}


function nameValidate(){
    if(campos[0].value.length < 3){
        setError[0];
    }
    else{
        removeError[0];
    }
}