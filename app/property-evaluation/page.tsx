"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/contexts/language-context"
import {
  MapPin,
  Home,
  Camera,
  FileText,
  TrendingUp,
  DollarSign,
  Star,
  Upload,
  CheckCircle,
  BarChart3,
} from "lucide-react"

interface PropertyData {
  location: string
  propertyType: string
  bedrooms: string
  bathrooms: string
  area: string
  age: string
  condition: string
  amenities: string[]
  description: string
  images: File[]
  documents: File[]
}

interface EvaluationResult {
  estimatedValue: number
  confidence: number
  marketTrend: string
  rentalYield: number
  comparableProperties: Array<{
    address: string
    price: number
    similarity: number
  }>
  recommendations: string[]
}

export default function PropertyEvaluationPage() {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [propertyData, setPropertyData] = useState<PropertyData>({
    location: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    age: "",
    condition: "",
    amenities: [],
    description: "",
    images: [],
    documents: [],
  })
  const [evaluationResult, setEvaluationResult] = useState<EvaluationResult | null>(null)

  const amenitiesList = [
    "Swimming Pool",
    "Gym",
    "Parking",
    "Balcony",
    "Garden",
    "Security",
    "Elevator",
    "Central AC",
    "Maid's Room",
    "Storage",
    "Beach Access",
    "Marina View",
  ]

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setPropertyData((prev) => ({
      ...prev,
      amenities: checked ? [...prev.amenities, amenity] : prev.amenities.filter((a) => a !== amenity),
    }))
  }

  const handleFileUpload = (files: FileList | null, type: "images" | "documents") => {
    if (files) {
      const fileArray = Array.from(files)
      setPropertyData((prev) => ({
        ...prev,
        [type]: [...prev[type], ...fileArray],
      }))
    }
  }

  const handleEvaluation = async () => {
    setIsLoading(true)

    // Simulate AI evaluation process
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Mock evaluation result
    const mockResult: EvaluationResult = {
      estimatedValue: 2850000,
      confidence: 87,
      marketTrend: "Increasing",
      rentalYield: 6.2,
      comparableProperties: [
        { address: "Al Reem Island Tower 1", price: 2750000, similarity: 92 },
        { address: "Saadiyat Beach Residences", price: 2950000, similarity: 88 },
        { address: "Yas Island Marina", price: 2650000, similarity: 85 },
      ],
      recommendations: [
        "Property is well-positioned in a growing market",
        "Consider minor renovations to increase value by 5-8%",
        "Rental market is strong in this area",
        "Good investment potential with projected 12% annual appreciation",
      ],
    }

    setEvaluationResult(mockResult)
    setIsLoading(false)
    setCurrentStep(5)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Property Location & Type</h3>
              <p className="text-gray-600">Tell us about your property's basic details</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Property Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., Al Reem Island, Abu Dhabi"
                  value={propertyData.location}
                  onChange={(e) => setPropertyData((prev) => ({ ...prev, location: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="propertyType">Property Type</Label>
                <Select
                  value={propertyData.propertyType}
                  onValueChange={(value) => setPropertyData((prev) => ({ ...prev, propertyType: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Select
                  value={propertyData.bedrooms}
                  onValueChange={(value) => setPropertyData((prev) => ({ ...prev, bedrooms: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Number of bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="1">1 Bedroom</SelectItem>
                    <SelectItem value="2">2 Bedrooms</SelectItem>
                    <SelectItem value="3">3 Bedrooms</SelectItem>
                    <SelectItem value="4">4 Bedrooms</SelectItem>
                    <SelectItem value="5+">5+ Bedrooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="bathrooms">Bathrooms</Label>
                <Select
                  value={propertyData.bathrooms}
                  onValueChange={(value) => setPropertyData((prev) => ({ ...prev, bathrooms: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Number of bathrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Bathroom</SelectItem>
                    <SelectItem value="2">2 Bathrooms</SelectItem>
                    <SelectItem value="3">3 Bathrooms</SelectItem>
                    <SelectItem value="4">4 Bathrooms</SelectItem>
                    <SelectItem value="5+">5+ Bathrooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Home className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Property Details</h3>
              <p className="text-gray-600">Provide specific details about your property</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="area">Built-up Area (sq ft)</Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="e.g., 1200"
                  value={propertyData.area}
                  onChange={(e) => setPropertyData((prev) => ({ ...prev, area: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="age">Property Age</Label>
                <Select
                  value={propertyData.age}
                  onValueChange={(value) => setPropertyData((prev) => ({ ...prev, age: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select property age" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">Brand New</SelectItem>
                    <SelectItem value="1-5">1-5 Years</SelectItem>
                    <SelectItem value="6-10">6-10 Years</SelectItem>
                    <SelectItem value="11-20">11-20 Years</SelectItem>
                    <SelectItem value="20+">20+ Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="condition">Property Condition</Label>
                <Select
                  value={propertyData.condition}
                  onValueChange={(value) => setPropertyData((prev) => ({ ...prev, condition: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select property condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="needs-renovation">Needs Renovation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Amenities & Features</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                {amenitiesList.map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox
                      id={amenity}
                      checked={propertyData.amenities.includes(amenity)}
                      onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                    />
                    <Label htmlFor={amenity} className="text-sm">
                      {amenity}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Camera className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Property Media</h3>
              <p className="text-gray-600">Upload images and videos of your property</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="images">Property Images</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload property images (JPG, PNG)</p>
                  <Input
                    id="images"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e.target.files, "images")}
                    className="hidden"
                  />
                  <Button type="button" variant="outline" onClick={() => document.getElementById("images")?.click()}>
                    Choose Images
                  </Button>
                </div>
                {propertyData.images.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">{propertyData.images.length} images selected</p>
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="description">Property Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your property, its unique features, and any additional information..."
                  rows={4}
                  value={propertyData.description}
                  onChange={(e) => setPropertyData((prev) => ({ ...prev, description: e.target.value }))}
                />
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <FileText className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Supporting Documents</h3>
              <p className="text-gray-600">Upload relevant property documents (optional)</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="documents">Property Documents</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload documents (PDF, DOC)</p>
                  <p className="text-xs text-gray-500 mb-3">Title deed, NOC, floor plan, etc.</p>
                  <Input
                    id="documents"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileUpload(e.target.files, "documents")}
                    className="hidden"
                  />
                  <Button type="button" variant="outline" onClick={() => document.getElementById("documents")?.click()}>
                    Choose Documents
                  </Button>
                </div>
                {propertyData.documents.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">{propertyData.documents.length} documents selected</p>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Ready for AI Evaluation</h4>
                <p className="text-sm text-blue-700">
                  Our AI will analyze your property data and provide a comprehensive valuation report including market
                  comparisons and investment recommendations.
                </p>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Analyzing Your Property</h3>
                <p className="text-gray-600 mb-4">Our AI is evaluating your property data...</p>
                <Progress value={75} className="w-64 mx-auto" />
              </div>
            ) : (
              evaluationResult && (
                <div className="space-y-6">
                  <div className="text-center">
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Property Evaluation Complete</h3>
                    <p className="text-gray-600">Here's your comprehensive property analysis</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Estimated Value</p>
                        <p className="text-2xl font-bold text-green-600">
                          AED {evaluationResult.estimatedValue.toLocaleString()}
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 text-center">
                        <Star className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Confidence Level</p>
                        <p className="text-2xl font-bold text-blue-600">{evaluationResult.confidence}%</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 text-center">
                        <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Market Trend</p>
                        <p className="text-lg font-semibold text-purple-600">{evaluationResult.marketTrend}</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4 text-center">
                        <BarChart3 className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Rental Yield</p>
                        <p className="text-2xl font-bold text-orange-600">{evaluationResult.rentalYield}%</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Comparable Properties</CardTitle>
                      <CardDescription>Similar properties in your area</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {evaluationResult.comparableProperties.map((property, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium">{property.address}</p>
                              <p className="text-sm text-gray-600">{property.similarity}% similarity match</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">AED {property.price.toLocaleString()}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>AI Recommendations</CardTitle>
                      <CardDescription>Insights and suggestions for your property</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {evaluationResult.recommendations.map((recommendation, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <p className="text-sm">{recommendation}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            )}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">{t("propertyEvaluationTitle")}</h1>
            <p className="text-xl text-gray-600 mb-6">{t("propertyEvaluationDescription")}</p>

            {/* Progress Steps */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step <= currentStep ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {step}
                    </div>
                    {step < 5 && <div className={`w-12 h-0.5 ${step < currentStep ? "bg-blue-500" : "bg-gray-200"}`} />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              {renderStep()}

              <Separator className="my-8" />

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                  disabled={currentStep === 1 || isLoading}
                >
                  {t("previous")}
                </Button>

                {currentStep < 4 ? (
                  <Button onClick={() => setCurrentStep((prev) => prev + 1)} disabled={isLoading}>
                    {t("next")}
                  </Button>
                ) : currentStep === 4 ? (
                  <Button onClick={handleEvaluation} disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
                    {isLoading ? t("loading") : "Start AI Evaluation"}
                  </Button>
                ) : (
                  <Button onClick={() => window.location.reload()} variant="outline">
                    New Evaluation
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
