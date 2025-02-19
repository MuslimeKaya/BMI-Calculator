// HTML öğelerine erişim
const amountInput = document.getElementById("amount") as HTMLInputElement;
const fromCurrencySelect = document.getElementById("currency") as HTMLSelectElement;
const toCurrencySelect = document.getElementById("convertedUnit") as HTMLSelectElement;
const calculateButton = document.getElementById("myButton") as HTMLButtonElement;
const resultDiv = document.getElementById("myDiv") as HTMLDivElement;

// Döviz kuru verileri (örnek sabit değerler)
const exchangeRates: { [key: string]: number } = {
    TR: 1,
    USD: 1 / 36.2627,
    EUR: 1 / 37.9844,
    RUB: 1 / 0.3962,
    CHF: 1 / 40.2261,
    CAD: 1 / 25.5500
};

// Olay dinleyici ekleme
calculateButton.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engeller

    // Kullanıcı girdilerini alma
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    // Döviz dönüşümünü hesaplama
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    const convertedAmount = (amount / fromRate) * toRate;

    // Sonucu gösterme
    resultDiv.innerText = `Conclusion:    ${convertedAmount.toFixed(2)} ${toCurrency}.`;
});
