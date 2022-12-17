import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="contactForm">
        <span className="contactTitle">Send e-mail:</span>

        <form
          action="mailto:someone@example.com?subject=Tribute Feedback"
          method="post"
          enctype="text/plain"
        >
          <label className="contactLabel"></label>
          <br />
          <input
            className="contactInput"
            type="text"
            name="name"
            placeholder="Enter your name"
            autoFocus={true}
          />
          <br />
          <label className="contactLabel"></label>
          <br />
          <input
            className="contactInput"
            type="text"
            name="mail"
            placeholder="Your email address"
          />
          <br />
          <label className="contactLabel"></label>
          <br />
          <textarea
            className="contactInput"
            type="text"
            name="comment"
            id=""
            cols="30"
            rows="10"
            placeholder="Enter the text of your email"
          ></textarea>
          <br />
          <br />
          <div className="contactButtons">
            <div>
              <input className="contactButton" type="submit" value="Send" />
            </div>
            <div>
              <input className="contactButton" type="reset" value="Reset" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
