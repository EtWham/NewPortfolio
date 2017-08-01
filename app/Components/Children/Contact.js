import React from 'react';

const Contact = (props) => {
	return(
	<div className="row" id="contact">
		<p id="contactTitle" className="animated fadeInDown center-text">Contact Me</p>
		<form id="contactForm">
			<div className="form-contain">
				<label className="input-label">Name:</label>
				<input className="form-control" name="from_name" id="nameInput" type="text"/>
			</div>

			<div className="form-contain">
				<label className="input-label">E-mail:</label>
				<input className="form-control" name="from_email" id="emailInput" type="text"/>
			</div>

			<div className="form-contain">
				<label className="input-label">Message:</label>	
				<textarea className="form-control" name="message_html" rows="15" id="msgInput"></textarea>
				<button type="submit" id="submit-btn" className="btn btn-primary">Send</button>
			</div>
		</form>
	</div>
	);
}

export default Contact;