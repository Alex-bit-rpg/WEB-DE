// js/script.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    // Get references to the navigation toggle button and the navigation list
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('nav ul');

    if (navToggle && navList) { // Check if elements exist
        // Add a click event listener to the toggle button
        navToggle.addEventListener('click', () => {
            // Toggle the 'nav-open' class on the navList to show/hide it
            navList.classList.toggle('nav-open');
            // Optional: Toggle an 'active' class on the button for styling (like animating the hamburger)
            navToggle.classList.toggle('active');
        });

        // Optional: Close the menu if a link is clicked (useful for single-page apps, but can be used here too)
        // This prevents the menu staying open after navigation on small screens
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('nav-open')) {
                    navList.classList.remove('nav-open');
                    navToggle.classList.remove('active');
                }
            });
        });
    } else {
        console.error("Navigation toggle elements not found.");
    }


    // --- Optional: Automatically update current year in footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) { // Check if the element exists
        currentYearSpan.textContent = new Date().getFullYear();
    }


    // --- Optional: Basic Contact Form Handling (Client-side only) ---
    // This example only prevents the default submit and shows a console message.
    // A real contact form requires server-side code to send email.
    const contactForm = document.getElementById('contactForm');
    if (contactForm) { // Check if form element exists
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission

            // Basic validation (you can add more complex validation here)
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all required fields.');
                return; // Stop the function if validation fails
            }

            // If validation passes (client-side)...
            console.log('Form submitted (client-side handled)');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // In a real application, you would send this data to a server here
            alert('Thank you for your message! (Note: This form does not actually send email)');

            // Optionally reset the form
            contactForm.reset();
        });
    }


}); // End DOMContentLoaded
