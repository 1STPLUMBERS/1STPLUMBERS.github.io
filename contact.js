// contact.js

// Function to handle form submission
function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Simulate form validation (you can add more complex validation as needed)
  if (!name || !email || !message) {
    document.getElementById("formStatus").innerHTML =
      "Please fill in all fields.";
    return;
  }

  // Simulate sending form data (replace with actual submission logic)
  // For demonstration, just clear the form and show success message
  document.getElementById("contactForm").reset();
  document.getElementById("formStatus").innerHTML =
    "Message sent successfully!";
}

// Initialize Google Maps
function initMap() {
  // The location of 1st Plumbers Ltd
  var companyLocation = { lat: 51.432277, lng: 0.129618 };
  // The map, centered at companyLocation
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: companyLocation,
  });
  // The marker, positioned at companyLocation
  var marker = new google.maps.Marker({
    position: companyLocation,
    map: map,
  });
}

// Attach event listener to the submit button
document.getElementById("submitForm").addEventListener("click", function () {
  submitForm();
});
