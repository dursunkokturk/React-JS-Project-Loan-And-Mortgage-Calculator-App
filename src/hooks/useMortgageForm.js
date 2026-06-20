import { useEffect, useState } from "react";
import { MortgageCalculator } from "../utils/mortgageCalculator";
import ValidationForm, { isValidNumber } from "../utils/validation";

export function useMortgageForm() {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("");
  const [activeField, setActiveField] = useState("");
  const [errors, setErrors] = useState({});

  // MontlyPayment,TotalPayment
  const [results, setResults] = useState(null);

  const clearError = (field) => {
    setErrors(prev => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  const handleFieldChange = (field, setter, value) => {
    setter(value);

    if (value && !isValidNumber(value)) {
      setErrors(prev => ({ ...prev, [field]: "Sadece Sayı Giriniz" }));
    } else {
      clearError(field);
    }
  };

  // Tum Degerler Degistiginde Otomatik Yeniden Hesapla
  useEffect(() => {

    // Hic Hesaplama Yapilmadiysa Dokunma
    if (results === null) return;

    const valid =
      mortgageAmount && mortgageTerm && interestRate && mortgageType &&
      isValidNumber(mortgageAmount) && isValidNumber(mortgageTerm) && isValidNumber(interestRate) &&
      Number(mortgageAmount) > 0 && Number(mortgageTerm) > 0 && Number(interestRate) > 0;

    if (!valid) {
      setResults(null);
      return;
    }

    setResults(MortgageCalculator({
      amount: mortgageAmount, term: mortgageTerm, rate: interestRate, type: mortgageType,
    }));
  }, [mortgageAmount, mortgageTerm, interestRate, mortgageType]); // Artik 4 Deger de Dependency'de

  const handleSubmit = () => {
    const newErrors = ValidationForm({
      amount: mortgageAmount, term: mortgageTerm, rate: interestRate, type: mortgageType
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setResults(MortgageCalculator({
        amount: mortgageAmount, term: mortgageTerm, rate: interestRate, type: mortgageType
      }));
    }
  };

  const handleClearAll = (e) => {
    e.preventDefault();
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("");
    setResults(null);

    // Hata Mesajlarini Siliyoruz
    setErrors({});
  };

  return {
    mortgageAmount, mortgageTerm, interestRate, mortgageType,
    activeField, setActiveField, errors, results,
    setMortgageAmount: (v) => handleFieldChange("amount", setMortgageAmount, v),
    setMortgageTerm: (v) => handleFieldChange("term", setMortgageTerm, v),
    setInterestRate: (v) => handleFieldChange("interest", setInterestRate, v),
    setMortgageType,
    handleSubmit, handleClearAll,
  }
}