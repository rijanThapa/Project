
const users = JSON.parse(localStorage.getItem('users')) || [];

function signup() {
  var email = document.getElementById('signupEmail').value;
  var password = document.getElementById('signupPassword').value;

  // Validate the input fields
  if (email.trim() === '' || password.trim() === '') {
    alert('Please fill in all the fields for signup.');
  } else {
    // Check if the email already exists
    if (users.find((user) => user.email === email)) {
      alert('Email already exists. Please choose a different email.');
    } else {
      // Store the user information
      users.push({ email, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Signup successful! Now you can log in.');
    }
  }
}

function login() {
  var email = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;

  // Validate the input fields
  if (email.trim() === '' || password.trim() === '') {
    alert('Please fill in all the fields for login.');
  } else {
    // Find the user by email
    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
      window.open('shop.html');
      
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}


