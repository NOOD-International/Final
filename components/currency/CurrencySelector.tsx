'use client';

import { useState, useEffect } from 'react';

export interface Currency {
  code: string;
  symbol: string;
  rate: number; // Conversion rate from USD
}

const currencies: Currency[] = [
  { code: 'USD', symbol: '$', rate: 1 },
  { code: 'EUR', symbol: '€', rate: 0.85 },
  { code: 'GBP', symbol: '£', rate: 0.73 },
  { code: 'JPY', symbol: '¥', rate: 110 },
  { code: 'AUD', symbol: 'A$', rate: 1.35 },
  { code: 'CAD', symbol: 'C$', rate: 1.25 },
];

interface CurrencySelectorProps {
  onCurrencyChange: (currency: Currency) => void;
  defaultCurrency?: string;
}

export const CurrencySelector = ({ onCurrencyChange, defaultCurrency = 'USD' }: CurrencySelectorProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(
    currencies.find(c => c.code === defaultCurrency) || currencies[0]
  );

  useEffect(() => {
    // Update CSS variables
    document.documentElement.style.setProperty('--currency-code', selectedCurrency.code);
    document.documentElement.style.setProperty('--currency-symbol', selectedCurrency.symbol);
    
    // Save to localStorage
    localStorage.setItem('selectedCurrency', selectedCurrency.code);
    
    // Notify parent component
    onCurrencyChange(selectedCurrency);
  }, [selectedCurrency, onCurrencyChange]);

  return (
    <div className="relative inline-block">
      <select
        value={selectedCurrency.code}
        onChange={(e) => {
          const currency = currencies.find(c => c.code === e.target.value);
          if (currency) setSelectedCurrency(currency);
        }}
        className="px-4 py-2 pr-8 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
        aria-label="Select currency"
      >
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.symbol} {currency.code}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};
