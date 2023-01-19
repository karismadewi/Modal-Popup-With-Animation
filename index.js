const openBtn= document.querySelector('button');
const closeBtn= document.querySelector('#close');
const modal= document.querySelector('.modal');

// open modal on click

openBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display= 'grid';
}

// close modal on click

closeBtn.addEventListener('click', closeModal);

function closeModal(){
    modal.style.display= 'none';    
}

modal.addEventListener('click', function(e){
    if(e.target.classList.contains('modal')){
        closeModal(); 
    }
});
