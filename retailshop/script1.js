document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Perform validation (you can add more checks)
    if (username === "" || email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }
  
    // Perform signup process
    // You can send the form data to the server using AJAX or any other method here
  
    alert("Signup successful!"); // Display success message
    document.getElementById("signupForm").reset(); // Clear form fields
  });
  