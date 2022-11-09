let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').addEventListener('click', ()=>{
    navbar.classList.toggle('active');
})

let vidData = document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.addEventListener('click', ()=>{
        let src =  btn.getAttribute('src');
        document.querySelector('.about .video-container .video').src = src
    })
})


const form = document.querySelector('#book-form')
const formInput = document.querySelector('.input-Booking')
const bookBtn = document.querySelector('.book-form .btn')

//load all event listeners
function loadEventListeners(){
    form.addEventListener('submit', addBooking);
}

function addBooking(e){
    if (formInput.value === ''){
        // alert('Add booking')
        console.log(hello)
    }

    e.preventDefault();
}


