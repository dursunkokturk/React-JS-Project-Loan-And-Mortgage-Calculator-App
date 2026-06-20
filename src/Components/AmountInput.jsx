export default function AmountInput({ value, onChange, error }) {
  return (
    <div className="form-group">
      <h4>Kredi Tutarı</h4>
      <div className={`input-box ${error ? "error-box" : ""}`}>
        <span className="prefix">₺</span>
        <input
          type="text"
          value={value}
          placeholder='50.000'
          // onFocus={() => setActiveField("amount")}
          // onBlur={() => setActiveField("")}

          onChange={(e) => {onChange(e.target.value)}}
        />
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  )
}