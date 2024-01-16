import { useState } from "react";

export const PhoneLoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(phoneNumber);

    // phone validations
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
      return;
    }

    setPhoneNumber("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={phoneNumber}
          onChange={phoneNumberHandler}
          placeholder="Enter your phone number"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
