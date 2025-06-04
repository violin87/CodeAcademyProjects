let darkMode = 'url("https://img.freepik.com/free-photo/horizontal-shot-abstract-buildings-with-white-metallic-ribs-glass-windows_181624-5395.jpg?t=st=1745645912~exp=1745649512~hmac=49430db6ac6bb4832fa9fabd50187e11d424db873af0d3187ebc478c50f51f55&w=2000")'
let lightMode = 'url("https://i0.wp.com/picjumbo.com/wp-content/uploads/magnificent-futuristic-dark-architectural-background-free-photo.jpeg?w=2210&quality=70")'

let contactBody = document.querySelector('.contactBody')

let contactNavs = document.querySelectorAll('.navHeader a')

let dark = false

const darkContactMode = () => {

     dark = !dark
     contactBody.style.backgroundImage = dark ? darkMode: lightMode;
     contactBody.style.color = dark ? 'black': 'white';


contactNavs.forEach(nav => {


       nav.style.color = dark ? 'blue': 'yellow'

})

}