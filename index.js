const openBtn= document.querySelector('button');
const closeBtn= document.querySelector('#close');
const modal= document.querySelector('.modal');
const form= document.querySelector('form');

// open modal on click

openBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display= 'grid';
}

// close modal on click

closeBtn.addEventListener('click', closeModal);

function closeModal(){
    modal.classList.add('close-modal-animation');
    setTimeout(()=>{
        modal.style.display= 'none';   
        window.location.reload();
    },1000);
}

modal.addEventListener('click', function(e){
    if(e.target.classList.contains('modal')){
        closeModal(); 
    }
});

// thank you after add email and click the subscribe button
form.addEventListener('submit', submitForm);

function submitForm() {
    const card = document.querySelector('.card');
    card.innerHTML = "<h1>Thank you for your support!</h1>";
    setTimeout(() => {
        closeModal();
    }, 3000);
}

