
function mostrarSenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }

}


const toggle = document.getElementById('sol');
const mainlogin = document.querySelector('.main-login');
const h1 = document.querySelector('.left-login > h1');
const boxlogin = document.querySelector('.card-login');
const h11 = document.querySelector('.card-login > h1');
const ci = document.querySelector('.textfield > input');
const btn = document.querySelector('.btn-login');
const form = document.querySelector('#form');


function trocarCor(){
    document.getElementById('senha').style.background = '#976493'
    document.getElementById('email').style.background = '#976493'
    document.getElementById('nome').style.background = '#976493'
}
function destrocarCor(){
    document.getElementById('senha').style.background = '#514869'
    document.getElementById('email').style.background = '#514869'
    document.getElementById('nome').style.background = '#514869'
}
function trocarImagem(){
    document.getElementById('verde').src = 'verdin.svg';
}
function destrocarImagem(){
    document.getElementById('verde').src = 'visionary-technology-animate.svg'
}

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon-fill');
    if(this.classList.toggle('sol')){
        mainlogin.style.background = '#b485b2';
        h1.style.color = '#ecebec';
        boxlogin.style.background = '#8e5b8c';
        h11.style.color = '#ecebec';
        btn.style.background = '#7e0a7e'
        btn.style.color = '#ecebec'
        trocarCor()
        trocarImagem()
    }else{
        mainlogin.style.background = '#201b2c';
        h1.style.color ='#00ff88';
        boxlogin.style.background = '#2f2841';
        h11.style.color = '#00ff88';
        btn.style.background = '#00ff88'
        btn.style.color = '#2b134b'
        destrocarImagem()
        destrocarCor()
    }
})




