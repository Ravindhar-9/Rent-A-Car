document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

      
        const pickupLocation = document.getElementById('pickup-location').value.trim();
        const returnLocation = document.getElementById('return-location').value.trim();
        const pickupDate = document.getElementById('pickup-date').value.trim();
        const returnDate = document.getElementById('return-date').value.trim();

        if (pickupLocation === '' || returnLocation === '' || pickupDate === '' || returnDate === '') {
            alert('Please fill in all fields.');
            return;
        }


        this.submit();
    });

   
    function setPickupLocation(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var pickupLocationInput = document.getElementById('pickup-location');
        pickupLocationInput.value = latitude + ', ' + longitude; 
    }

    // Function to handle errors in geolocation
    function handleLocationError(error) {
        console.error('Error getting user location:', error);
     
    }

    // Check if geolocation is supported by the browser
    if ('geolocation' in navigator) {
        
        navigator.geolocation.getCurrentPosition(setPickupLocation, handleLocationError);
    } else {
        console.log('Geolocation is not supported by this browser.');
       
    }

 
    var pickupDateInput = document.getElementById('pickup-date');

  
    var returnDateInput = document.getElementById('return-date');

   
    var today = new Date().toISOString().split('T')[0];

  
    pickupDateInput.min = today;

   
    function handlePickupDateChange() {
        
        returnDateInput.min = pickupDateInput.value;

        
        returnDateInput.disabled = false;
    }

   
    pickupDateInput.addEventListener('change', handlePickupDateChange);
});
document.addEventListener('DOMContentLoaded', function() {
    var pickupDateInput = document.getElementById('pickup-date');
    var returnDateInput = document.getElementById('return-date');
    
    
    var today = new Date().toISOString().split('T')[0];

  
    pickupDateInput.min = today;

   
    function handlePickupDateChange() {
       
        returnDateInput.min = pickupDateInput.value;
        
        returnDateInput.disabled = false;
    }

  
    pickupDateInput.addEventListener('change', handlePickupDateChange);
});

document.addEventListener('DOMContentLoaded', function() {
    var text = "FIND YOUR PERFECT RIDE"; 
    var speed = 100; 
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

