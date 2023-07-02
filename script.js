document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Show loading message
    document.getElementById("loading-msg").style.display = "block";
  
    // Simulate form submission delay (3 seconds)
    setTimeout(function() {
      // Hide loading message
      document.getElementById("loading-msg").style.display = "none";
  
      // Get form data
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;
  
      // Create list item
      var listItem = document.createElement("li")
      listItem.textContent = "Name: " + name + ", Email: " + email + ", Message: " + message;
  
      // Append list item to the list
      document.getElementById("form-details").appendChild(listItem);
  
      // Clear form fields
      document.getElementById("myForm").reset();
    }, 2000);
  });
  