import React from 'react';

const Contact = (props) => {
	return(
	<div id="contact">
		<p id="contact-title" className="animated fadeInDown center-text">Get In Touch</p>
		<form id="myform">
			<div className="form-contain">
				<label className="input-label">Name</label>
				<input className="form-control" name="from_name" id="name-input" type="text"/>
			</div>

			<div className="form-contain">
				<label className="input-label">E-mail</label>
				<input className="form-control" name="from_email" id="email-input" type="text"/>
			</div>

			<div className="form-contain">
				<label className="input-label">Message</label>	
				<textarea className="form-control" name="message_html" rows="15" id="textArea"></textarea>
				<button type="submit" id="submit-btn" className="btn btn-primary">Send</button>
			</div>
		</form>
	</div>
	);
}
export default Contact;