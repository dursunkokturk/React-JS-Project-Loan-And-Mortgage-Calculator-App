import Calculator from './assets/img/calculator.png'
import './App.css'
import { useMortgageForm } from './hooks/useMortgageForm';
import AmountInput from './Components/AmountInput';
import TermAndInterestInputs from './Components/TermAndInterestInputs';
import ResultsPanel from './Components/ResultsPanel';
import MortgageTypeSelector from './Components/MortgageTypeSelector';

export default function App() {
  const {
    mortgageAmount, setMortgageAmount,
    mortgageTerm, setMortgageTerm,
    interestRate, setInterestRate,
    mortgageType, setMortgageType,
    activeField, setActiveField,
    errors, results,
    handleSubmit, handleClearAll,
  } = useMortgageForm();

  return (
    <>
      <div className="container">
        <div className="header-and-main">
          <header className='header'>
            <h2>Kredi ve İpotek Hesaplama</h2>
            <a href="" className='clear-btn' onClick={handleClearAll}>Hepsini Sil</a>
          </header>
          <main className='main'>
            <AmountInput
              value={mortgageAmount}
              onChange={setMortgageAmount}
              error={errors.amount}
            />
            <TermAndInterestInputs
              term={mortgageTerm} onTermChange={setMortgageTerm} termError={errors.term}
              rate={interestRate} onRateChange={setInterestRate} rateError={errors.interest}
              activeField={activeField} setActiveField={setActiveField}
            />
            <MortgageTypeSelector
              value={mortgageType}
              onChange={setMortgageType}
              error={errors.type}
            />
            <div className="form-button">
              <button onClick={handleSubmit}><img src={Calculator} alt="" />
                Taksitleri Hesapla
              </button>
            </div>
          </main>
        </div >

        <footer className='footer'>
          <ResultsPanel results={results}/>
        </footer>

      </div >
    </>
  )
}