import { useState } from "react";
import { OtpInput } from "./OtpInput";

export const PhoneLoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showInput, setShowInput] = useState(false);

  const phoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(phoneNumber);

    // phone validations
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    // otp field
    setShowInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
  };

  return (
    <>
      {!showInput ? (
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={phoneNumber}
            onChange={phoneNumberHandler}
            placeholder="Enter your phone number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </>
  );
};
