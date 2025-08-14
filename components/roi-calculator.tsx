"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"

export function ROICalculator() {
  const { t } = useLanguage()
  const [propertyValue, setPropertyValue] = useState([500000])
  const [downPayment, setDownPayment] = useState([20])
  const [loanTerm, setLoanTerm] = useState([25])
  const [interestRate, setInterestRate] = useState([4.5])
  const [rentalYield, setRentalYield] = useState([6])
  const [propertyType, setPropertyType] = useState("apartment")

  const calculateROI = () => {
    const principal = propertyValue[0] * (downPayment[0] / 100)
    const loanAmount = propertyValue[0] - principal
    const monthlyRate = interestRate[0] / 100 / 12
    const numPayments = loanTerm[0] * 12

    const monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)

    const annualRent = propertyValue[0] * (rentalYield[0] / 100)
    const monthlyRent = annualRent / 12
    const monthlyCashFlow = monthlyRent - monthlyPayment
    const annualCashFlow = monthlyCashFlow * 12
    const roi = (annualCashFlow / principal) * 100

    return {
      monthlyPayment: monthlyPayment,
      monthlyRent: monthlyRent,
      monthlyCashFlow: monthlyCashFlow,
      annualCashFlow: annualCashFlow,
      roi: roi,
      totalInvestment: principal,
    }
  }

  const results = calculateROI()

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 space-y-6 md:space-y-8">
      <div className="text-center space-y-3 md:space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white">{t("roiCalculatorTitle")}</h2>
        <p className="text-sm md:text-lg text-silver-300 max-w-2xl mx-auto">{t("roiCalculatorDescription")}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Input Controls */}
        <Card className="bg-black/50 backdrop-blur-sm border-silver-700">
          <CardHeader className="pb-4 md:pb-6">
            <CardTitle className="text-lg md:text-xl text-white">{t("investmentParameters")}</CardTitle>
            <CardDescription className="text-silver-400 text-sm md:text-base">
              {t("adjustParametersDescription")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 md:space-y-8">
            {/* Property Type */}
            <div className="space-y-2 md:space-y-3">
              <Label className="text-sm md:text-base text-white">{t("propertyType")}</Label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="bg-black/30 border-silver-600 text-white h-10 md:h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black border-silver-600">
                  <SelectItem value="apartment" className="text-white hover:bg-silver-800">
                    {t("apartment")}
                  </SelectItem>
                  <SelectItem value="villa" className="text-white hover:bg-silver-800">
                    {t("villa")}
                  </SelectItem>
                  <SelectItem value="penthouse" className="text-white hover:bg-silver-800">
                    {t("penthouse")}
                  </SelectItem>
                  <SelectItem value="townhouse" className="text-white hover:bg-silver-800">
                    {t("townhouse")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Property Value */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm md:text-base text-white">{t("propertyValue")}</Label>
                <span className="text-sm md:text-base text-silver-300">${propertyValue[0].toLocaleString()}</span>
              </div>
              <div className="px-2 md:px-3">
                <Slider
                  value={propertyValue}
                  onValueChange={setPropertyValue}
                  max={2000000}
                  min={100000}
                  step={25000}
                  className="w-full"
                />
              </div>
            </div>

            {/* Down Payment */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm md:text-base text-white">{t("downPayment")}</Label>
                <span className="text-sm md:text-base text-silver-300">
                  {downPayment[0]}% (${((propertyValue[0] * downPayment[0]) / 100).toLocaleString()})
                </span>
              </div>
              <div className="px-2 md:px-3">
                <Slider
                  value={downPayment}
                  onValueChange={setDownPayment}
                  max={50}
                  min={10}
                  step={5}
                  className="w-full"
                />
              </div>
            </div>

            {/* Loan Term */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm md:text-base text-white">{t("loanTerm")}</Label>
                <span className="text-sm md:text-base text-silver-300">
                  {loanTerm[0]} {t("years")}
                </span>
              </div>
              <div className="px-2 md:px-3">
                <Slider value={loanTerm} onValueChange={setLoanTerm} max={30} min={10} step={5} className="w-full" />
              </div>
            </div>

            {/* Interest Rate */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm md:text-base text-white">{t("interestRate")}</Label>
                <span className="text-sm md:text-base text-silver-300">{interestRate[0]}%</span>
              </div>
              <div className="px-2 md:px-3">
                <Slider
                  value={interestRate}
                  onValueChange={setInterestRate}
                  max={8}
                  min={2}
                  step={0.1}
                  className="w-full"
                />
              </div>
            </div>

            {/* Rental Yield */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-sm md:text-base text-white">{t("expectedRentalYield")}</Label>
                <span className="text-sm md:text-base text-silver-300">{rentalYield[0]}%</span>
              </div>
              <div className="px-2 md:px-3">
                <Slider
                  value={rentalYield}
                  onValueChange={setRentalYield}
                  max={12}
                  min={3}
                  step={0.5}
                  className="w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="bg-black/50 backdrop-blur-sm border-silver-700">
          <CardHeader className="pb-4 md:pb-6">
            <CardTitle className="text-lg md:text-xl text-white">{t("investmentResults")}</CardTitle>
            <CardDescription className="text-silver-400 text-sm md:text-base">
              {t("projectedReturnsDescription")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-black/30 p-3 md:p-4 rounded-lg border border-silver-700">
                <div className="text-xs md:text-sm text-silver-400 mb-1 md:mb-2">{t("totalInvestment")}</div>
                <div className="text-lg md:text-2xl font-bold text-white">
                  ${results.totalInvestment.toLocaleString()}
                </div>
              </div>

              <div className="bg-black/30 p-3 md:p-4 rounded-lg border border-silver-700">
                <div className="text-xs md:text-sm text-silver-400 mb-1 md:mb-2">{t("monthlyRent")}</div>
                <div className="text-lg md:text-2xl font-bold text-green-400">
                  ${results.monthlyRent.toLocaleString()}
                </div>
              </div>

              <div className="bg-black/30 p-3 md:p-4 rounded-lg border border-silver-700">
                <div className="text-xs md:text-sm text-silver-400 mb-1 md:mb-2">{t("monthlyPayment")}</div>
                <div className="text-lg md:text-2xl font-bold text-red-400">
                  ${results.monthlyPayment.toLocaleString()}
                </div>
              </div>

              <div className="bg-black/30 p-3 md:p-4 rounded-lg border border-silver-700">
                <div className="text-xs md:text-sm text-silver-400 mb-1 md:mb-2">{t("monthlyCashFlow")}</div>
                <div
                  className={`text-lg md:text-2xl font-bold ${results.monthlyCashFlow >= 0 ? "text-green-400" : "text-red-400"}`}
                >
                  ${results.monthlyCashFlow.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-silver-900/50 to-black/50 p-4 md:p-6 rounded-lg border border-silver-600">
              <div className="text-center space-y-2 md:space-y-3">
                <div className="text-sm md:text-base text-silver-400">{t("annualROI")}</div>
                <div
                  className={`text-3xl md:text-4xl font-bold ${results.roi >= 0 ? "text-green-400" : "text-red-400"}`}
                >
                  {results.roi.toFixed(2)}%
                </div>
                <div className="text-xs md:text-sm text-silver-500">
                  {t("annualCashFlow")}: ${results.annualCashFlow.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 p-3 md:p-4 rounded-lg border border-blue-700/50">
              <div className="text-xs md:text-sm text-blue-300">
                <strong>{t("disclaimer")}:</strong> {t("disclaimerText")}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
