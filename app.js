// Först gjorde jag en funktion med en alert som dök upp på sidan, 
//men tyckte att en modal skulle vara snyggare.
// function myFunction() {
//     alert("Håll ut, E-handeln lanseras snart!");
// }

// Här gör jag en funktion till min knapp 

document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById("myBtn");

    // Ett click event
    // När användaren klickar på knappen kommer modal upp på skärmen.
    btn.addEventListener("click", function() {
        let myModal = new bootstrap.Modal(document.getElementById("myModal"));
        myModal.show();
    });
});