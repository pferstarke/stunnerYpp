// "document.createElement()" to create HTML element div assigned to variable "modal"
let modal = document.createElement("div");

// classList.add() to apply the CSS to modal, display:none during the window reload.
modal.classList.add("modal");

// appendChild() will make modal a child of the html body, displays modal when page is rendered.
document.body.appendChild(modal);

let modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);

let modalText = document.createElement("p");
modalText.textContent = "Are you sure you want to cancel your subscription?";
modalContent.appendChild(modalText);

let modalButtons = document.createElement("div");
modalButtons.classList.add("modal-buttons");
modalContent.appendChild(modalButtons);


// hides the modal when "No" button is clicked
let modalNoButton = document.createElement("button");
modalNoButton.textContent = "No";
modalNoButton.addEventListener("click", function() {
    modal.style.display = "none";
});
modalButtons.appendChild(modalNoButton);

// button created with text content "Yes - Cancel"
let modalYesButton = document.createElement("button");
modalYesButton.textContent = "Yes - Cancel";

// Updates the Action "Cancel" to "Cancelled"
modalYesButton.addEventListener("click", function() {
    modalText.textContent = "Subscription successfully cancelled!";
    modalNoButton.style.display = "none";
    modalYesButton.style.display = "none";
    document.getElementById("cancel-btn").textContent = "Cancelled";
    setTimeout(function() {
        modal.style.display = "none";
    }, 2000); // 2000 milliseconds, the modal will disappear during the setTimeout()
});
modalButtons.appendChild(modalYesButton);



let cancelButton = document.getElementById("cancel-btn");
cancelButton.style.cursor = "pointer";

// changes text decoration to underline
cancelButton.addEventListener("mouseover", function() {
    cancelButton.style.textDecoration = "underline";
});

// returns text decoration to none
cancelButton.addEventListener("mouseout", function() {
    cancelButton.style.textDecoration = "none";
});

// shows the modal when action button "Cancel" is clicked.
cancelButton.addEventListener("click", function(event) {
    // prevents page from reloading after the event
    event.preventDefault();
    modal.style.display = "block";
});


