document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent the default form submission

    var cname = document.getElementById("cname").value;
    var cemail = document.getElementById("cemail").value;
    var cmessage = document.getElementById("cmessage").value;

    var formData = {
        cname: cname,
        cemail: cemail,
        cmessage: cmessage
    };

    fetch("https://script.google.com/macros/s/AKfycby3zsubhSmSbafaukLF2xdTC6cNt2Kg4_ZjQdKdsWFfyxlpBiscL6jCkw_I6LbQIH-R/exec", {
        method: "POST",
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === "success") {
            // Show a success alert
            alert("Thank you for contacting us!");

            // Clear the form
            document.getElementById("contactForm").reset();
        }
    })
    .catch(error => console.error('Error:', error));
});
