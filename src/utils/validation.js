export const isValidNumber = (value) => /^\d*\.?\d+$/.test(value);

export default function ValidationForm({ amount, term, rate, type }) {
  const errors = {};

  if (!amount.trim()) {
    errors.amount = "Kredi Tutarı Giriniz";
  } else if (!isValidNumber(amount)) {
    errors.amount = "Sadece Sayı Giriniz";
  } else if (Number(amount) <= 0) {
    errors.amount = "0'dan Büyük Değer Giriniz";
  }

  if (!term.trim()) {
    errors.term = "Vade Süresi Giriniz";
  } else if (!isValidNumber(term)) {
    errors.term = "Sadece Sayı Giriniz";
  } else if (Number(term) <= 0) {
    errors.term = "Geçerli Bir Vade Giriniz";
  }

  if (!rate.trim()) {
    errors.interest = "Faiz Oranı Giriniz";
  } else if (!isValidNumber(rate)) {
    errors.interest = "Sadece Sayı Giriniz";
  } else if (Number(rate) <= 0) {
    errors.interest = "Geçerli Faiz Oranı Giriniz";
  }

  if (!type) {
    errors.type = "Bir Seçim Yapınız";
  }

  return errors;
}