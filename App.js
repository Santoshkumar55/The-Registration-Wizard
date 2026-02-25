import "./App.css";
import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(1);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  // validation
  const emailValid = email.includes("@");
  const passwordValid = password.length >= 8;
  const matchValid = password === confirmPassword;

  if (success) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Success! Registration Done 🎉</h2>
      </div>
    );
  }

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      
      <h2>Step {step} of 3</h2>

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          /><br /><br />

          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          /><br /><br />

          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          /><br /><br />

          <button
            disabled={!firstName || !lastName || !dob}
            onClick={() => setStep(2)}
          >
            Next
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!emailValid && email && (
            <p style={{ color: "red" }}>Email must contain @</p>
          )}
          <br />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password (min 8 char)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!passwordValid && password && (
            <p style={{ color: "red" }}>Password too short</p>
          )}
          <br />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {!matchValid && confirmPassword && (
            <p style={{ color: "red" }}>Password not match</p>
          )}
          <br />

          <button onClick={() => setShowPassword(!showPassword)}>
            Show / Hide Password
          </button>
          <br /><br />

          <button onClick={() => setStep(1)}>Back</button>

          <button
            disabled={!emailValid || !passwordValid || !matchValid}
            onClick={() => setStep(3)}
          >
            Next
          </button>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div>
          <h3>Review Your Details</h3>

          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Date of Birth: {dob}</p>
          <p>Email: {email}</p>

          <button onClick={() => setStep(2)}>Back</button>

          <button
            onClick={() => {
              console.log({
                firstName,
                lastName,
                dob,
                email,
                password,
              });
              setSuccess(true);
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
