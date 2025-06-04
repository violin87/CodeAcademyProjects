let body = document.querySelector('.myInfo')

let lightBackground = 'url("https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg?t=st=1745977628~exp=1745981228~hmac=5f1bde60d7457b1a8a9906752c6841659759495a9f595b45373e221ed34da2c2&w=2000")';
let darkBackground = 'url("https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg?t=st=1745980695~exp=1745984295~hmac=f1c6854e06377f8b39146f68735d1f836267036ddba9177cf877b8b62f35ee58&w=2000")'

let navs = document.querySelectorAll('.navMyInfo a')

let button = document.querySelector(".darkModeInfo")

let dark = false



const darkModeHandle = () => {

     dark = !dark


     body.style.backgroundImage = dark ? darkBackground: lightBackground
     body.style.color = dark ? 'white': 'black';
     button.innerText = dark ? 'Light Mode': 'Dark Mode'


     navs.forEach((nav) => {

      
       nav.style.color = dark ? 'yellow' : 'blue'
    
    
    })

}