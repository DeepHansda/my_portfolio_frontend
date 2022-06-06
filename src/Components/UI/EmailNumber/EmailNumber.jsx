import React from "react";
import "./email.css";
function EmailNumber() {
  return (
    <div className="emailNumber">
      <div className="emailNumber-address">
        <h4>Address :</h4>
        <p>
          Vill : Maheshpur , PO - Salanpur , PS - Salanpur , Dist - Paschim
          Bardhaman , West Bengal , Pin - 713357
        </p>
      </div>
      <div className="contact-buttons">
        <div className="email c-button">
          <p>deephansda921@gmail.com</p>
        </div>
        <div className="number c-button">
          <p>9647750384</p>
        </div>
      </div>
    </div>
  );
}

export default EmailNumber;
