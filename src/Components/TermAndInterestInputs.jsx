export default function TermAndInterestInputs({
  term, onTermChange, termError,
  rate, onRateChange, rateError,
  activeField, setActiveField,
}) {
  return (
    <div className="mortgage-term-and-interest-rate">
      <div className="form-group">
        <h4>İpotek Vadesi</h4>
        <div className={`input-box ${termError ? "error-box" : ""}`}>
          <input
            type="text"
            value={term}
            placeholder='5'
            onFocus={() => setActiveField("term")}
            onBlur={() => setActiveField("")}

            onChange={(e) => { onTermChange(e.target.value) }}
          />
          <span className={`prefix ${activeField === "term" ? "active-prefix" : ""}`}>Yıl</span>
        </div>
        {termError && <p className="error-text">{termError}</p>}
      </div>

      <div className="form-group">
        <h4>Yüzde Oranı</h4>
        <div className={`input-box ${rateError ? "error-box" : ""}`}>
          <input
            type="text"
            value={rate}
            placeholder='5.25'
            onFocus={() => setActiveField("interest")}
            onBlur={() => setActiveField("")}

            onChange={(e) => { onRateChange(e.target.value) }}
          />
          <span className={`prefix ${activeField === "interest" ? "active-prefix" : ""}`}>%</span>
        </div>
        {rateError && <p className="error-text">{rateError}</p>}
      </div>
    </div>
  )
}