const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");

  let isValid = true;

  if (fullname.value.trim() === "") {
    showError(fullname, "Full Name is required");
    isValid = false;
  } else {
    hideError(fullname);
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    showError(email, "Please enter a valid email");
    isValid = false;
  } else {
    hideError(email);
  }

  if (password.value.trim() === "") {
    showError(password, "Password is required");
    isValid = false;
  } else if (password.value.length < 8 || password.value.length > 16) {
    showError(password, "Password must be between 8 and 16 characters");
    isValid = false;
  } else {
    hideError(password);
  }

  if (confirmPassword.value.trim() === "") {
    showError(confirmPassword, "Password confirmation is required");
    isValid = false;
  } else if (confirmPassword.value !== password.value) {
    showError(confirmPassword, "Passwords do not match");
    isValid = false;
  } else {
    hideError(confirmPassword);
  }

  if (isValid) {
    alert("Registration successful");
  }
});

function showError(input, message) {
  const parent = input.parentElement;
  let error = parent.querySelector(".error-message");
  if (!error) {
    error = document.createElement("div");
    error.classList.add("error-message");
    parent.appendChild(error);
  }
  error.textContent = message;
  input.classList.add("is-invalid");
}

function hideError(input) {
  const parent = input.parentElement;
  const error = parent.querySelector(".error-message");
  if (error) {
    error.remove();
  }
  input.classList.remove("is-invalid");
}
