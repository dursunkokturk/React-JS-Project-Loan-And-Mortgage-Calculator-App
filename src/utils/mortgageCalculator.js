export function MortgageCalculator ({ amount, term, rate, type }) {
  const principal = Number(amount);
  const totalMonths = term * 12;
  const monthlyRate = rate / 12 / 100;

  let monthlyPayment;
  let calculatedMonthlyPayment;

  if (type === "repayment") {
    calculatedMonthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  } else {
    calculatedMonthlyPayment = principal * monthlyRate;
  }

  const calculatedTotalPayment = calculatedMonthlyPayment * totalMonths;

  return {
    monthlyPayment: calculatedMonthlyPayment.toFixed(2),
    totalPayment: calculatedTotalPayment.toFixed(2),
  };
}