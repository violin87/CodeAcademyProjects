let body = document.querySelector('.body')
let button = document.querySelector('.button')
let javaIcon = document.querySelector('.iscript')


const darkMode = () => {

 body.style.backgroundColor = body.style.backgroundColor === 'black'? 'white': 'black';
 body.style.color = body.style.color ==='white'? 'black': 'white';
 button.innerText = button.innerText === 'Dark Mode'? 'Light Mode': 'Dark Mode';
 if(javaIcon) {
    javaIcon.src = body.style.backgroundColor === 'black' ? 'https://img.icons8.com/?size=100&id=6eTRpgF0TFTj&format=png&color=000000': 'https://img.icons8.com/?size=100&id=39854&format=png&color=000000';

 }
}