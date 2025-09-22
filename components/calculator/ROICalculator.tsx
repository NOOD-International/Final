'use client';

import { useState, useCallback } from 'react';
import { CurrencySelector, type Currency } from '@/components/currency/CurrencySelector';

export const ROICalculator = () => {
  const [currency, setCurrency] = useState<Currency>({ code: 'USD', symbol: '$', rate: 1 });
  const [investment, setInvestment] = useState(10000);
  const [returnRate, setReturnRate] = useState(10);
  const [years, setYears] = useState(5);

  const handleCurrencyChange = useCallback((newCurrency: Currency) => {
    setCurrency(newCurrency);
  }, []);

  const convertAmount = (amountInUSD: number) => {
    return amountInUSD * currency.rate;
  };

  const formatCurrency = (amount: number) => {
    return `${currency.symbol}${convertAmount(amount).toFixed(2)}`;
  };

  const calculateROI = () => {
    const futureValue = investment * Math.pow(1 + returnRate / 100, years);
    const profit = futureValue - investment;
    const roi = ((profit / investment) * 100).toFixed(2);
    
    return {
      futureValue: futureValue,
      profit: profit,
      roiPercentage: roi
    };
  };

  const results = calculateROI();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">ROI Calculator</h2>
      
      <div className="mb-6 flex justify-end">
        <CurrencySelector onCurrencyChange={handleCurrencyChange} />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Initial Investment ({currency.symbol})
          </label>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            placeholder="Enter initial investment amount"
            title="Initial investment amount"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Expected Annual Return (%)
          </label>
          <input
            type="number"
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
            placeholder="Enter expected annual return percentage"
            title="Expected annual return percentage"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Investment Period (Years)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            placeholder="Enter investment period in years"
            title="Investment period in years"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />
        </div>

        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Results</h3>
          <div className="space-y-2">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Future Value:</span> {formatCurrency(results.futureValue)}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Total Profit:</span> {formatCurrency(results.profit)}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">ROI:</span> {results.roiPercentage}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
