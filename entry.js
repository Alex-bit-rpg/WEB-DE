// js/entry.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Get the button element by its ID
    const enterButton = document.getElementById('enterButton');

    // Check if the button exists on this page
    if (enterButton) {
        // Add a click event listener to the button
        enterButton.addEventListener('click', () => {
            // Redirect the user to the main homepage
            // window.location.href navigates like clicking a link
            window.location.href = 'index.html';

            // Alternatively, window.location.replace('index.html');
            // replaces the current page in history, meaning the user can't go back to the entry page
            // by pressing the back button after entering.
        });
    }
});
