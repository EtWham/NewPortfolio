import React from 'react';

const Contact = (props) => {
	return(
		<div className="container-fixed">
			<div className="row" id="contact">
				<p id="contactTitle" className="animated fadeInDown center-text">Contact Me</p>
				<form id="contactForm">
					<div className="form-group">
						<label className="input-name">Name:</label>
						<input type="name" className="form-control" name="from_name" id="nameInput" type="text"/>
					</div>
					<div className="form-group">
						<label className="input-email">E-mail:</label>
						<input type="email" className="form-control" name="from_email" id="emailInput" placeholder="name@example.com" type="text"/>
					</div>
					<div className="form-group">
						<label className="input-message">Message:</label>	
						<textarea className="form-control" name="message_html" id="msgInput" rows="15"></textarea>
						<button type="submit" id="submit-btn" className="btn btn-primary" disabled="disabled">Send</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;