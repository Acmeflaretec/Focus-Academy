document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent default form submission

    var rname = document.getElementById("rname").value;
    var remail = document.getElementById("remail").value;
    var rphone = document.getElementById("rphone").value;

    var formData = {
        rname: rname,
        remail: remail,
        rphone: rphone
    };

    fetch("https://script.google.com/macros/s/AKfycbwOI8neD7bh35f294tHY_C0pueGEQj_P-lR40mSmRtRePkLuR6Akk98-brhE5HZhj9qQQ/exec", {
        method: "POST",
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === "success") {
            // Show an alert when the form is successfully submitted
            alert("Thank you for registration!");

            // Clear the form fields
            document.getElementById("registrationForm").reset();
        }
    })
    .catch(error => console.error('Error:', error));
});
