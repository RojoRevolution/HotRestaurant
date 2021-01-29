// ===========================
// On Page Button Variables

// Reservation Variables
const reserveName = document.getElementById('reserve-name');
const reservePhone = document.getElementById('reserve-phone');
const reserveEmail = document.getElementById('reserve-email');
const reserveId = document.getElementById('reserve-unique-id');
const submitBtn = document.getElementById('search');

// Variable that creates new reservation object
let newReservation = {
    name: reserveName,
    phone: reserveEmail,
    email: reserveEmail,
    id: reserveId,
};


// ===========================
// Event Listeners
viewBtn.addEventListener('click', () => {
    // remove console log once click is confirmed
    console.log('click')

    // Will likely need to  use fetch: this is placeholder code for now
    // fetch(`RESERVATION ROUTE`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // })
    //     .then((response) => response.json());
    //     .then((data) => {
    //         console.log(data);
    //         // Deconstruct Item
    //         // Add If Else Logic if needed?
    //     })
})


homeBtn.addEventListener('click', () => {
    // remove console log once click is confirmed
    console.log('click')
})

// Listener for submit button
// CONTAINS PLACEHOLDER CONTENT
submitBtn.addEventListener('click', (event) => {
    // Button is part of a form so we prevent default?
    event.preventDefault();
    // remove console log once click is confirmed
    console.log('click')
    // new fetch for POST
    fetch('NEED PATH', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReservation),
    })
        .then((response) => response.json());
        .then((data) => {
            alert(`Adding a reservation for ${data.name}`)
        })
        .catch((error) => {
            console.error('Error', error);
        });
})