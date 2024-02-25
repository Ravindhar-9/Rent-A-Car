document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate form fields
        const pickupLocation = document.getElementById('pickup-location').value.trim();
        const returnLocation = document.getElementById('return-location').value.trim();
        const pickupDate = document.getElementById('pickup-date').value.trim();
        const returnDate = document.getElementById('return-date').value.trim();

        if (pickupLocation === '' || returnLocation === '' || pickupDate === '' || returnDate === '') {
            alert('Please fill in all fields.');
            return;
        }

        // If form is valid, submit it
        this.submit();
    });

    // Function to set the pickup location using user's current position
    function setPickupLocation(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var pickupLocationInput = document.getElementById('pickup-location');
        pickupLocationInput.value = latitude + ', ' + longitude; // Set the value to lat, long
    }

    // Function to handle errors in geolocation
    function handleLocationError(error) {
        console.error('Error getting user location:', error);
        // Handle error gracefully, e.g., display a message to the user
    }

    // Check if geolocation is supported by the browser
    if ('geolocation' in navigator) {
        // Get the user's current position
        navigator.geolocation.getCurrentPosition(setPickupLocation, handleLocationError);
    } else {
        console.log('Geolocation is not supported by this browser.');
        // Handle lack of support gracefully, e.g., display a message to the user
    }

    // Get the pickup date input field
    var pickupDateInput = document.getElementById('pickup-date');

    // Get the return date input field
    var returnDateInput = document.getElementById('return-date');

    // Get today's date in YYYY-MM-DD format
    var today = new Date().toISOString().split('T')[0];

    // Set the minimum value of the pickup date input field to today's date
    pickupDateInput.min = today;

    // Function to handle change event on the pickup date input field
    function handlePickupDateChange() {
        // Set the minimum value of the return date input field to the selected pickup date
        returnDateInput.min = pickupDateInput.value;

        // Enable the return date input field
        returnDateInput.disabled = false;
    }

    // Add event listener to the pickup date input field
    pickupDateInput.addEventListener('change', handlePickupDateChange);
});
document.addEventListener('DOMContentLoaded', function() {
    var pickupDateInput = document.getElementById('pickup-date');
    var returnDateInput = document.getElementById('return-date');
    
    // Get today's date in YYYY-MM-DD format
    var today = new Date().toISOString().split('T')[0];

    // Set the minimum value of the pickup date input field to today's date
    pickupDateInput.min = today;

    // Function to handle change event on the pickup date input field
    function handlePickupDateChange() {
        // Set the minimum value of the return date input field to the selected pickup date
        returnDateInput.min = pickupDateInput.value;
        // Enable the return date input field
        returnDateInput.disabled = false;
    }

    // Add event listener to the pickup date input field
    pickupDateInput.addEventListener('change', handlePickupDateChange);
});

document.addEventListener('DOMContentLoaded', function() {
    var text = "FIND YOUR PERFECT RIDE"; // Text to be typed out
    var speed = 100; // Typing speed in milliseconds

    var index = 0;
    var typewriterHeading = document.getElementById('typewriter-heading');

    function typeWriter() {
        if (index < text.length) {
            typewriterHeading.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

