import { useState } from 'react';
import './GetInvolvedForm.scss';

const GetInvolvedForm = () => {
  const [result, setResult] = useState("");
  const emailAccessKey = import.meta.env.VITE_EMAIL_ACCESS_KEY;

  const validateForm = (formData) => {
    if (formData.get("over18") === "No") {
      setResult("Sorry, you must be over 18 to volunteer with us. We hope you reach out again in the future.");
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
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="get-involved">
      <h2 className="get-involved__title">Want to become a volunteer?</h2>
      <p className="get-involved__description">You can add your name to the volunteer callout list here!</p>
      <form className="get-involved__form" onSubmit={onSubmit}>
        <label className="get-involved__label">
          NAME
        </label>
          <input className="get-involved__input" type="text" name="name" placeholder="John Doe" required />
        <label className="get-involved__label">
          PRONOUNS
        </label>
          <input className="get-involved__input" type="text" name="pronouns" placeholder="they/them" required />
        <label className="get-involved__label">
          EMAIL
        </label>
          <input className="get-involved__input" type="email" name="email" placeholder="example@example.com" required />
        <label className="get-involved__label">
          PREFERRED EVENT
        </label>
          <input className="get-involved__input" type="text" name="preferredEvent" placeholder="PRIDEtoberfest" required />
        <label className="get-involved__label">
          SMART SERVE CERTIFIED
          <div className="get-involved__radio-group">
            <label className="get-involved__radio-label">
              <input className="get-involved__radio-input" type="radio" name="smartServeCertified" value="Yes" required /> Yes
            </label>
            <label className="get-involved__radio-label">
              <input className="get-involved__radio-input" type="radio" name="smartServeCertified" value="No" required /> No
            </label>
          </div>
        </label>
        <label className="get-involved__label">
          OVER THE AGE OF 18?
          <div className="get-involved__radio-group">
            <label className="get-involved__radio-label">
              <input className="get-involved__radio-input" type="radio" name="over18" value="Yes" required /> Yes
            </label>
            <label className="get-involved__radio-label">
              <input className="get-involved__radio-input" type="radio" name="over18" value="No" required /> No
            </label>
          </div>
        </label>
        <button className="get-involved__submit" type="submit">SUBMIT</button>
      </form>
      <span className="get-involved__result">{result}</span>
    </section>
  );
};

export default GetInvolvedForm;
