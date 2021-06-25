import  Modal  from './modal.js';

const modal = Modal();

const modalTittle = document.querySelector('.modal h2');
const modalDiscription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');



// Pegar todos os botões com a classe Check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button => {
    // Adicionar a esculta 
    button.addEventListener("click", handleClick);
});

// Pegar Quando o marcar como lido ser clicado


// Abrir Modal

const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false));
});

function handleClick(event, check = true){

    event.preventDefault();

    const text = check ? "Marcar como lida " : "Excluir ";
    const slug = check ? "check" : "delete";
    const questionId = event.target.dataset.id;
    const roomId = document.querySelector('#room-id').dataset.id;

    const form = document.querySelector('.modal form'); 

    
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);
    


    modalTittle.innerHTML = `${text} esta pergunta`;
    modalDiscription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} pergunta esta pergunta?`;

    modalButton.innerHTML = `Sim ${text.toLocaleLowerCase()}`;
    check? modalButton.classList.remove('red') : modalButton.classList.add('red') 
    // Abrir Modal 
    modal.open();
}