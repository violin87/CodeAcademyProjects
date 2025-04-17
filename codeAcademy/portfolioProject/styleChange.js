const paragras= document.querySelectorAll('.para, .para1, .para2, .para3, .para4, .para5, .para6')


const toggleStyle = () => {

       paragras.forEach((para) => {

       para.style.fontFamily = para.style.fontFamily === 'Arial' ? 'Times New Roman': 'Arial'
       })  
} 