import './Contact.css';
function Contact() {
  return (
    <div className="contact">
      <h1>You can contact us at :</h1>
      <a
        href="mailto:ahmedkhaledelgharbawy7@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gmail: ahmedkhaledelgharbawy7@gmail.com
      </a>
      <a href="tel:+20a028485733" target="_blank" rel="noopener noreferrer">
        Phone: +201028485733
      </a>
      <a
        href="https://wa.me/201028485733"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp: +201028485733
      </a>
      <a
        href="https://github.com/Ahmed-kh10"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub: https://github.com/Ahmed-kh10
      </a>
      <a
        href="https://www.facebook.com/AhmedKhaledElgharbawy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook: https://www.facebook.com/AhmedKhaledElgharbawy
      </a>
    </div>
  );
}

export default Contact;
