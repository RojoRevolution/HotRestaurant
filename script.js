// On Page Button Variables
// Need ID names
const viewBtn = document.getElementById('#');
const reserveBtn = document.getElementById('#');
const homeBtn = document.getElementById('#');
const submitBtn = document.getElementById('#');







// Event Listeners
viewBtn.addEventListener('click', () => {
    // remove console log once click is confirmed
    console.log('click')
})

reserveBtn.addEventListener('click', () => {
    // remove console log once click is confirmed
    console.log('click')
})

homeBtn.addEventListener('click', () => {
    // remove console log once click is confirmed
    console.log('click')
})

submitBtn.addEventListener('click', (event) => {
    // Button is part of a form so we prevent default?
    event.preventDefault();
    // remove console log once click is confirmed
    console.log('click')
})