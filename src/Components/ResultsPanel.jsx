import CalculateFooter from '../assets/img/calculate-footer.png'

export default function ResultsPanel({ results }) {
  if (!results) {
    return (
      <>
        <img src={CalculateFooter} alt="" />
        <h2>Sonuçlar Burada Gösterilir</h2>
        <h4>Formu doldurun ve aylık taksit tutarlarınızı görmek için "taksitleri hesapla" düğmesine tıklayın.</h4>
      </>
    );
  }

  return (
    <>
    <h2>Sonuçlarınız</h2>
      <h4>Sağladığınız bilgilere göre sonuçlarınız aşağıda gösterilmektedir. Sonuçları değiştirmek için formu düzenleyin ve “geri ödemeleri hesapla” seçeneğine tekrar tıklayın.</h4>
      <div className="monthly-payment">
        <h4>Aylık Taksitleriniz</h4>
        <h1>₺ {results.monthlyPayment}</h1>
        <div className="separator"></div>
        <h4>Vade boyunca ödeyeceğiniz toplam tutar</h4>
        <h2 className='total-amount'><span>₺</span>{results.totalPayment}</h2>
      </div>
    </>
  )
}