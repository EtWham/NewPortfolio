var contactForm = $("form#contactForm");
contactForm.submit(function(event){
  event.preventDefault();

  var service_id = "default_service";
  var template_id = "PortfolioEmail";

  contactForm.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,"contactForm")
    .then(function(){ 
      alert("Sent!");
      $('#nameInput').val('');
      $('#emailInput').val('');
      $('#msgInput').val('');
       contactForm.find("button").text("Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       contactForm.find("button").text("Send");
    });
  return false;
});