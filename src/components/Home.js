import React, { useState } from "react";
import "./CSS/Home.css";

const Home = () => {
  const [formData, setFormData] = useState({
    cash: "",
    deposits: "",
    loans: "",
    taxRefund: "",
    gold: "",
    shares: "",
    businessCash: "",
    inventory: "",
    netIncome: "",
    debts: "",
  });

  const [zakat, setZakat] = useState(null);
  const [currency, setCurrency] = useState("PKR");

  // Gold rates (Example values, replace with real rates)
  const goldRates = {
    PKR: 14000, // Price per gram in PKR
    USD: 60, // Price per gram in USD
  };

  // Define nisabThreshold outside calculateZakat so it can be used in JSX
  const nisabThreshold = goldRates[currency] * 85.05; // 85.05 grams of gold

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (/^\d*$/.test(value)) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const calculateZakat = () => {
    const totalAssets = Object.values(formData).reduce((acc, val) => acc + Number(val), 0);
    const totalDebts = Number(formData.debts);
    const netWorth = totalAssets - totalDebts;

    if (netWorth >= nisabThreshold) {
      setZakat((netWorth * 2.5) / 100);
    } else {
      setZakat(0);
    }
  };

  return (
    <div className="page-container">
      <img src={require("../images/left-image.png")} alt="Left" className="side-image" />
      <div className="main-container">
        <div className="container zakat-form">
          <h1 className="title">Calculate Your Zakat Now!</h1>

          {/* Currency & Gold Rate Display */}
          <div className="currency-info-container">
            <div className="currency-box">
              <strong>Currency:</strong> {currency}
            </div>
            <div className="gold-rate-box">
              <strong>Gold Rate:</strong> {goldRates[currency]} {currency}/gram
            </div>
          </div>

          {/* Switch Currency Button */}
          <div className="switch-currency-container">
            <button
              className="switch-currency-btn"
              onClick={() => setCurrency(currency === "PKR" ? "USD" : "PKR")}
            >
              Switch to {currency === "PKR" ? "USD" : "PKR"}
            </button>
          </div>

          <div className="container" id="zakatform">
            {[
              { label: "Cash on hand and in bank accounts", name: "cash" },
              { label: "Refundable deposits (e.g., on rented apartment)", name: "deposits" },
              { label: "Non-delinquent loans (money you loaned to others)", name: "loans" },
              { label: "Expected tax refund", name: "taxRefund" },
              { label: "Gold, silver, and precious items", name: "gold" },
              { label: "Shares, stocks, bonds, retirement accounts", name: "shares" },
              { label: "Business cash on hand and in banks", name: "businessCash" },
              { label: "Net value of business inventory and trade goods", name: "inventory" },
              { label: "Net income you are entitled to as of Zakat due date", name: "netIncome" },
              { label: "Debts and liabilities", name: "debts" },
            ].map((field) => (
              <div className="input-group mb-3" key={field.name}>
                <label className="input-label">{field.label}</label>
                <input
                  type="number"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="form-control input-field"
                  placeholder="Enter Value"
                  min="0"
                />
              </div>
            ))}
            <div className="calculate-btn-container">
              <button className="calculate-btn" type="button" onClick={calculateZakat}>
                Calculate Zakat
              </button>
            </div>
            
            {/* Display Nisab Threshold */}
            <div className="nisab-info">
              <h3>Nisab Threshold: {nisabThreshold.toFixed(2)} {currency}</h3>
            </div>

            {zakat !== null && (
              <div className="zakat-preview">
                <h2>Total Zakat Due</h2>
                <p className="zakat-amount">
                  {currency === "PKR" ? "Rs" : "$"} {zakat.toFixed(2)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <img src={require("../images/right-image.png")} alt="Right" className="side-image" />
    </div>
  );
};

export default Home;
