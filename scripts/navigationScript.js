function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    console.log("hello")
}

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));

            // Add active class to the clicked tab and corresponding content
            tab.classList.add('active');
        });
    });
});

// Show the home content by default on page load
document.addEventListener("DOMContentLoaded", function () {
    const defaultTab = document.querySelector('#home-tab');
    if (defaultTab) {
        loadFile("home.html")
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.tab');
    const contentDiv = document.getElementById('content');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetFile = button.dataset.target;

            // Fetch the content from the target file
            loadFile(targetFile)
        });
    });
});

function loadFile(targetFile) {
    const contentDiv = document.getElementById('content');
    // Fetch the content from the target file
    fetch(targetFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            contentDiv.innerHTML = 'An error occurred while loading the content.'; // User-friendly error message
        });
}
