function validateLogin() {
  let user = document.getElementById("loginUser").value.trim();
  let pass = document.getElementById("loginPass").value;

  if (user === "") {
    alert("Username cannot be empty");
    return false;
  }

  if (pass.length < 8) {
    alert("Password must be at least 8 characters");
    return false;
  }

  alert("Login Successful");
  return true;
}

function validateRegister() {
  let user = document.getElementById("user").value.trim();
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;
  let email = document.getElementById("email").value.trim();
  let mobile = document.getElementById("mobile").value.trim();

  // Username ≥ 6 chars
  if (user.length < 6) {
    alert("Username must be at least 6 characters");
    return false;
  }

  // Password ≥ 8 + pattern
  let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passPattern.test(pass)) {
    alert("Password must contain uppercase, lowercase, number and 8 characters");
    return false;
  }

  // Confirm Password
  if (pass !== cpass) {
    alert("Passwords do not match");
    return false;
  }

  // Email format
  let emailPattern = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert("Enter valid email (name@domain.com)");
    return false;
  }

  // Mobile validation
  let mobilePattern = /^[6-9][0-9]{9}$/;
  if (!mobilePattern.test(mobile)) {
    alert("Mobile must be 10 digits starting with 6-9");
    return false;
  }

  alert("Registration Successful");
  return true;
}
