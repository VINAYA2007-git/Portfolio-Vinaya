document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      alert("Thank you, " + name + "! Your message has been sent.");
      this.reset();
    });