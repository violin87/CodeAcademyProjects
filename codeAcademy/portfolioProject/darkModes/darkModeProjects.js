let projectBody = document.querySelector('.projectBody')
let lightBackground = "url('https://i0.wp.com/picjumbo.com/wp-content/uploads/broken-laptop-with-swollen-battery-free-photo.jpg?w=2210&quality=70')"
let darkBackground = "url('https://i0.wp.com/picjumbo.com/wp-content/uploads/modern-laptop-colorful-close-up.jpg?w=2210&quality=70')"
let buttonProject= document.querySelector('.darkModeProject')
let projectLabel = document.querySelectorAll("label")
let dark = false
let navs = document.querySelectorAll('.navProject a')


const projectDarkMode = () => {

    dark = !dark

    projectBody.style.backgroundImage = dark ? darkBackground: lightBackground
    buttonProject.innerText = dark ? "Light Mode" : "Dark Mode"
    projectLabel.forEach(label => {

        label.style.color = dark ? 'white' : 'black'

    })

    navs.forEach(nav => {


        nav.style.color = dark ? "yellow" : "blue"
    })



}  

