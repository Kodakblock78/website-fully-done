// Get the modal element
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
const closeBtn = document.querySelector(".close");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const button = document.getElementById('myButton');

// Check localStorage to set initial state
if (localStorage.getItem('buttonClicked') === 'true') {
    button.classList.add('clicked');
}

button.addEventListener('click', () => {
    button.classList.toggle('clicked');
    localStorage.setItem('buttonClicked', button.classList.contains('clicked'));
});


