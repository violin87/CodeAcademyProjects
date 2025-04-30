let body = document.querySelector('.body')
let button = document.querySelector('.button')
let isDark = "url('https://i0.wp.com/picjumbo.com/wp-content/uploads/waterfall-in-a-dark-forest-free-photo.jpeg?w=2210&quality=70')"
let normalImage = "url('https://i0.wp.com/picjumbo.com/wp-content/uploads/winter-mountains-scenery-vertical-free-image.jpg?w=1024&quality=50')"
let mainPageNavs = document.querySelectorAll('nav a')

let dark = false


const darkMode = () => {

dark = !dark

 body.style.backgroundImage = dark? isDark: normalImage
 body.style.color = dark? 'white': 'black';
 button.innerText =  dark? 'Light Mode':'Dark Mode';
 mainPageNavs.forEach(link => {

    link.style.color = dark? 'yellow': 'blue';

 })

}