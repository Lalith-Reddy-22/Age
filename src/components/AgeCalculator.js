import React, { useState } from "react";
import "./Style.css";

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  const calculateAge = () => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);

    let ageYears = today.getFullYear() - birthdateDate.getFullYear();
    let ageMonths = today.getMonth() - birthdateDate.getMonth();
    let ageDays = today.getDate() - birthdateDate.getDate();

    if (ageDays < 0) {
      const daysInLastMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      ageDays += daysInLastMonth;
      ageMonths--;
    }

    if (ageMonths < 0) {
      ageMonths += 12;
      ageYears--;
    }

    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });
  };

  const resetCalculator = () => {
    setBirthdate("");
    setAge({
      years: 0,
      months: 0,
      days: 0,
    });
  };

  return (
    <div className="Container">
      <h1 className="title">AGE CALCULATOR</h1>
      <p className="container_title">CALCULATES THE AGE ACCORDINGLY</p>
      <div className="Container_middle">
        <div className="top">
          <h2 className="title2">Date of Birth</h2>
          <input
            className="date"
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <div className="button">
            <button className="button_al" onClick={calculateAge}>
              Calculate Age
            </button>
            <button className="button_al" onClick={resetCalculator}>
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="output">
        <div className="Container_middle_para">
          <h2>Your Age is</h2>
        </div>
        <div className="age_heading">
          <h5>
            {age.years} years {age.months} months {age.days} days
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
