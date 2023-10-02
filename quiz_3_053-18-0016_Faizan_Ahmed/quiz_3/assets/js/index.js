function showSignup(platform) {
    // Hide all signup windows
    document.querySelectorAll('.signup-window').forEach(window => {
        window.style.display = 'none';
    });

    // Show the selected signup window
    document.getElementById(platform + 'Signup').style.display = 'block';
}

// Handle form submissions and print values to console
document.getElementById('twitterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('twitterName').value;
    const username = document.getElementById('twitterUsername').value;
    const email = document.getElementById('twitterEmail').value;
    const password = document.getElementById('twitterPassword').value;
    console.log("Twitter Signup Data:");
    console.log("Full Name: " + name);
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + password);
});

document.getElementById('facebookForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const firstName = document.getElementById('facebookFirstName').value;
    const lastName = document.getElementById('facebookLastName').value;
    const email = document.getElementById('facebookEmail').value;
    const password = document.getElementById('facebookPassword').value;
    console.log("Facebook Signup Data:");
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);
    console.log("Password: " + password);
});

document.getElementById('linkedinForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const linkedinFullName = document.getElementById('linkedinFullName').value;
    const linkedinEmail = document.getElementById('linkedinEmail').value;
    const linkedinPassword = document.getElementById('linkedinPassword').value;
    console.log("LinkedIn Signup Data:");
    console.log("Full Name: " + linkedinFullName);
    console.log("Email: " + linkedinEmail);
    console.log("Password: " + linkedinPassword);
});