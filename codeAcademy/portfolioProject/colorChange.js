let paras = document.querySelectorAll('.para, .para1, .para2, .para3, .para4, .para5, .para6')

const toggleColor = () => {


    paras.forEach(para => {
    para.style.color = para.style.color === 'red' ? 'black': 'red';
});
};
