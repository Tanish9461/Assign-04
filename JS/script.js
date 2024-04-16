document.addEventListener('DOMContentLoaded', function() {
    const studentInfo = document.getElementById('student-info');
    studentInfo.textContent = 'Student ID: 200552822 - Name: Tanish Tanish';

    const catButton = document.getElementById('new-cat');
    const catContainer = document.getElementById('cat-container');

    catButton.addEventListener('click', loadCat);

    function loadCat() {
        // Assume API_KEY is securely fetched from an environment variable or server-side logic
        const API_KEY = 'Ylive_zv6sN65p1RwDU80R2TmuMM21eAjS8vVlm9wUDK5ylo4PJ1YRrwe5ymqZ7Ajyutjv'; 
        fetch('https://api.thecatapi.com/v1/images/search', {
            headers: {
                'x-api-key': API_KEY
            }
        })
        .then(response => response.json())
        .then(cats => {
            if (cats.length > 0) {
                catContainer.innerHTML = `<img src="${cats[0].url}" alt="Random Cat Image">`;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
    }

    loadCat(); // Load a cat image when the page loads
});
