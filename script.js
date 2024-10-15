let button = document.querySelector('.btn')
let closeButton = document.querySelector('.closebtn')
let card = document.querySelector('.mod')


button.onclick = () => {
    card.classList.toggle('show')
    console.log(card);
}   
    closeButton.onclick = () => {
    card.classList.remove('show');
    console.log(card);
};


const img = document.querySelector('.collect')
const btns = document.querySelectorAll('.btncollect')

const pictures = {}

