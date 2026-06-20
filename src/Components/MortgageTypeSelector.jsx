export default function MortgageTypeSelector({ value, onChange, error }) {
  const options = [
    { value: "repayment", label: "Geri Ödeme" },
    { value: "interest-only", label: "Sadece Faiz" },
  ];

  return (
    <div className="form-group">
      <h4>Kira ve İpotek Tipi</h4>
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`input-radio ${value === opt.value ? "active-radio" : ""}`}
        >
          <input
            type="radio"
            className='radio'
            name='payment'
            value={opt.value}
            checked={value === opt.value}
            // onBlur={() => setActiveField("")}
            onChange={(e) => onChange(e.target.value)}
          />
          <span className='payment-type'>{opt.label}</span>
        </label>
      ))}
      {error && (
        <p className="error-text">{error}</p>
      )}
    </div>
  )
}