const tableUL = document.getElementById('tablelist')
const waitListUL = document.getElementById('waitlist')


// Fetch that GET's table info - placeholder code 
fetch('NEED PATH', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

    })
})