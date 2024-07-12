import { useState } from "react";
import "./ContactUsForm.scss";
import map from "../../assets/icons/map.png";
import email from "../../assets/icons/email.png";

const ContactUsForm = () => {
  const [result, setResult] = useState("");
  const emailAccessKey = import.meta.env.VITE_EMAIL_ACCESS_KEY_INFO;

  const validateForm = (formData) => {
    if (formData.get("botcheck")) {
      setResult("Spam detected. Please try again.");
      return false;
    }

    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");

    const formData = new FormData(event.target);

    if (!validateForm(formData)) {
      return;
    }

    formData.append("access_key", emailAccessKey);

    setResult("Sending...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact">
      <h2 className="contact__title">Get in touch!</h2>
      <div className="contact__info">
        
          <a
            className="contact__info-item"
            href="https://www.google.com/maps?q=250+King+St+West,+Kitchener+ON+N2G+0A4+PO+Box+26018"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={map} alt="map pin icon" className="contact__info-image" />
            <div className="contact__info-text">
              <p className="contact__info-location-text-line">
                250 King St West,
              </p>
              <p className="contact__info-location-text-line">Kitchener ON</p>
              <p className="contact__info-location-text-line">
                N2G 0A4 PO Box 26018
              </p>
            </div>
          </a>
        
        <a href="mailto:info@tri-pride.ca" className="contact__info-item">
          <img src={email} alt="email icon" className="contact__info-image" />
          <p className="contact__info-text">info@tri-pride.ca</p>
        </a>
      </div>
      <p className="contact__description">
        Or, fill out this form and one of our members will reach out shortly.
      </p>
      <form className="contact__form" onSubmit={onSubmit}>
        <div className="contact__group">
          <label className="contact__label">NAME</label>
          <input
            className="contact__input"
            type="text"
            name="name"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="contact__group">
          <label className="contact__label">PRONOUNS</label>
          <input
            className="contact__input"
            type="text"
            name="pronouns"
            placeholder="they/them"
            required
          />
        </div>
        <div className="contact__group">
          <label className="contact__label">EMAIL</label>
          <input
            className="contact__input"
            type="email"
            name="email"
            placeholder="example@example.com"
            required
          />
        </div>
        <div className="contact__group">
          <label className="contact__label">COMMENT/MESSAGE</label>
          <textarea
            className="contact__input"
            type="text"
            name="message"
            placeholder="Your message"
            required
          />
        </div>
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />
        <button className="contact__submit" type="submit">
          SUBMIT
        </button>
      </form>
      <span className="contact__result">{result}</span>
    </section>
  );
};

export default ContactUsForm;
