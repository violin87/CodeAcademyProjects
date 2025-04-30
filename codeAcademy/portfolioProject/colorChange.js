let paras = document.querySelectorAll('.para, .para1, .para2, .para3, .para4, .para5, .para6')

const toggleColor = () => {

    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)


    paras.forEach(para => {
    para.style.color = para.style.color === 'black'? randomColor : 'black';
});
};
