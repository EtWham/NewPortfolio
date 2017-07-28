var myform = $("form#contactForm");
myform.submit(function(event){
  event.preventDefault();

  var service_id = "PortfolioGmail";
  var template_id = "PortfolioEmail";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,"myform")
    .then(function(){ 
      alert("Sent!");
      $('#nameInput').val('');
      $('#emailInput').val('');
      $('#msgInput').val('');
       myform.find("button").text("Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});