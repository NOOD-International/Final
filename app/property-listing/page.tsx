"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/contexts/language-context"
import { User, Shield, Home, Camera, FileText, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react"

interface UserAuth {
  isAuthenticated: boolean
  email: string
  name: string
  authMethod: "google" | "email" | null
}

interface PropertyListing {
  // Basic Info
  title: string
  description: string
  propertyType: string
  bedrooms: string
  bathrooms: string
  area: string

  // Location
  emirate: string
  area_name: string
  building: string
  address: string

  // Pricing
  askingPrice: string
  pricePerSqft: string

  // Contact
  ownerName: string
  ownerPhone: string
  ownerEmail: string

  // Property Details
  age: string
  condition: string
  furnishing: string
  amenities: string[]

  // Media
  images: File[]
  videos: File[]

  // Legal Documents
  titleDeed: File | null
  emiratesId: File | null
  noc: File | null

  // Additional
  availableFrom: string
  viewingTimes: string
}

export default function PropertyListingPage() {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [userAuth, setUserAuth] = useState<UserAuth>({
    isAuthenticated: false,
    email: "",
    name: "",
    authMethod: null,
  })

  const [propertyListing, setPropertyListing] = useState<PropertyListing>({
    title: "",
    description: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    emirate: "",
    area_name: "",
    building: "",
    address: "",
    askingPrice: "",
    pricePerSqft: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    age: "",
    condition: "",
    furnishing: "",
    amenities: [],
    images: [],
    videos: [],
    titleDeed: null,
    emiratesId: null,
    noc: null,
    availableFrom: "",
    viewingTimes: "",
  })

  const emirates = ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"]

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
    "City View",
    "Concierge",
    "Spa",
    "Tennis Court",
  ]

  const handleGoogleAuth = async () => {
    setIsLoading(true)
    // Simulate Google OAuth
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setUserAuth({
      isAuthenticated: true,
      email: "owner@example.com",
      name: "Property Owner",
      authMethod: "google",
    })
    setPropertyListing((prev) => ({
      ...prev,
      ownerEmail: "owner@example.com",
      ownerName: "Property Owner",
    }))
    setIsLoading(false)
    setCurrentStep(2)
  }

  const handleEmailAuth = async (email: string) => {
    setIsLoading(true)
    // Simulate email verification
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setUserAuth({
      isAuthenticated: true,
      email: email,
      name: "Property Owner",
      authMethod: "email",
    })
    setPropertyListing((prev) => ({
      ...prev,
      ownerEmail: email,
      ownerName: "Property Owner",
    }))
    setIsLoading(false)
    setCurrentStep(2)
  }

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setPropertyListing((prev) => ({
      ...prev,
      amenities: checked ? [...prev.amenities, amenity] : prev.amenities.filter((a) => a !== amenity),
    }))
  }

  const handleFileUpload = (
    file: File | null,
    type: keyof Pick<PropertyListing, "titleDeed" | "emiratesId" | "noc">,
  ) => {
    setPropertyListing((prev) => ({
      ...prev,
      [type]: file,
    }))
  }

  const handleMultipleFileUpload = (files: FileList | null, type: "images" | "videos") => {
    if (files) {
      const fileArray = Array.from(files)
      setPropertyListing((prev) => ({
        ...prev,
        [type]: [...prev[type], ...fileArray],
      }))
    }
  }

  const handleSubmitListing = async () => {
    setIsLoading(true)
    // Simulate listing submission
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsLoading(false)
    setCurrentStep(6)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <User className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t("loginRequired")}</h3>
              <p className="text-gray-600">Please authenticate to list your property</p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={handleGoogleAuth}
                disabled={isLoading}
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                ) : (
                  <Mail className="h-4 w-4 mr-2" />
                )}
                Continue with Google
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Or</span>
                </div>
              </div>

              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  onChange={(e) => setPropertyListing((prev) => ({ ...prev, ownerEmail: e.target.value }))}
                />
                <Button
                  onClick={() => handleEmailAuth(propertyListing.ownerEmail)}
                  disabled={!propertyListing.ownerEmail || isLoading}
                  variant="outline"
                  className="w-full"
                >
                  Continue with Email
                </Button>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800">UAE Ownership Required</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    Only verified UAE property owners can list properties. You'll need to provide Emirates ID and Title
                    Deed for verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t("verifyOwnership")}</h3>
              <p className="text-gray-600">Upload required documents to verify UAE property ownership</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="emiratesId">Emirates ID *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <FileText className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload your Emirates ID (PDF/JPG)</p>
                  <Input
                    id="emiratesId"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload(e.target.files?.[0] || null, "emiratesId")}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("emiratesId")?.click()}
                  >
                    {propertyListing.emiratesId ? "Change File" : "Choose File"}
                  </Button>
                  {propertyListing.emiratesId && (
                    <p className="text-sm text-green-600 mt-2">✓ {propertyListing.emiratesId.name}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="titleDeed">Title Deed *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <FileText className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload property title deed (PDF)</p>
                  <Input
                    id="titleDeed"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileUpload(e.target.files?.[0] || null, "titleDeed")}
                    className="hidden"
                  />
                  <Button type="button" variant="outline" onClick={() => document.getElementById("titleDeed")?.click()}>
                    {propertyListing.titleDeed ? "Change File" : "Choose File"}
                  </Button>
                  {propertyListing.titleDeed && (
                    <p className="text-sm text-green-600 mt-2">✓ {propertyListing.titleDeed.name}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="noc">No Objection Certificate (Optional)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <FileText className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload NOC if applicable (PDF)</p>
                  <Input
                    id="noc"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileUpload(e.target.files?.[0] || null, "noc")}
                    className="hidden"
                  />
                  <Button type="button" variant="outline" onClick={() => document.getElementById("noc")?.click()}>
                    {propertyListing.noc ? "Change File" : "Choose File"}
                  </Button>
                  {propertyListing.noc && <p className="text-sm text-green-600 mt-2">✓ {propertyListing.noc.name}</p>}
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-800">Document Verification</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    All documents will be verified within 24-48 hours. You'll receive an email confirmation once your
                    ownership is verified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Home className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Property Details</h3>
              <p className="text-gray-600">Provide comprehensive details about your property</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="title">Property Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Luxury 3BR Apartment in Al Reem Island"
                  value={propertyListing.title}
                  onChange={(e) => setPropertyListing((prev) => ({ ...prev, title: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="propertyType">Property Type *</Label>
                <Select
                  value={propertyListing.propertyType}
                  onValueChange={(value) => setPropertyListing((prev) => ({ ...prev, propertyType: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="emirate">Emirate *</Label>
                <Select
                  value={propertyListing.emirate}
                  onValueChange={(value) => setPropertyListing((prev) => ({ ...prev, emirate: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select emirate" />
                  </SelectTrigger>
                  <SelectContent>
                    {emirates.map((emirate) => (
                      <SelectItem key={emirate} value={emirate}>
                        {emirate}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="area_name">Area/Community *</Label>
                <Input
                  id="area_name"
                  placeholder="e.g., Al Reem Island, Marina"
                  value={propertyListing.area_name}
                  onChange={(e) => setPropertyListing((prev) => ({ ...prev, area_name: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="building">Building/Development</Label>
                <Input
                  id="building"
                  placeholder="e.g., Marina Heights Tower"
                  value={propertyListing.building}
                  onChange={(e) => setPropertyListing((prev) => ({ ...prev, building: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="bedrooms">Bedrooms *</Label>
                <Select
                  value={propertyListing.bedrooms}
                  onValueChange={(value) => setPropertyListing((prev) => ({ ...prev, bedrooms: value }))}
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
                <Label htmlFor="bathrooms">Bathrooms *</Label>
                <Select
                  value={propertyListing.bathrooms}
                  onValueChange={(value) => setPropertyListing((prev) => ({ ...prev, bathrooms: value }))}
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

              <div>
                <Label htmlFor="area">Built-up Area (sq ft) *</Label>
                <Input
                  id="area"
                  type="number"
                  placeholder="e.g., 1200"
                  value={propertyListing.area}
                  onChange={(e) => setPropertyListing((prev) => ({ ...prev, area: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="askingPrice">Asking Price (AED) *</Label>
                <Input
                  id="askingPrice"
                  type="number"
                  placeholder="e.g., 2500000"
                  value={propertyListing.askingPrice}
                  onChange={(e) => {
                    const price = e.target.value
                    const area = propertyListing.area
                    const pricePerSqft = area ? (Number.parseInt(price) / Number.parseInt(area)).toFixed(0) : ""
                    setPropertyListing((prev) => ({
                      ...prev,
                      askingPrice: price,
                      pricePerSqft: pricePerSqft,
                    }))
                  }}
                />
              </div>

              {propertyListing.pricePerSqft && (
                <div>
                  <Label>Price per sq ft</Label>
                  <Input value={`AED ${propertyListing.pricePerSqft}`} disabled className="bg-gray-50" />
                </div>
              )}

              <div className="md:col-span-2">
                <Label htmlFor="description">Property Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your property, its features, location benefits, and any unique selling points..."
                  rows={4}
                  value={propertyListing.description}
                  onChange={(e) => setPropertyListing((prev) => ({ ...prev, description: e.target.value }))}
                />
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Camera className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Property Media & Features</h3>
              <p className="text-gray-600">Upload images and specify property features</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="images">Property Images *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload high-quality property images</p>
                  <p className="text-xs text-gray-500 mb-3">JPG, PNG (Max 10 images, 5MB each)</p>
                  <Input
                    id="images"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleMultipleFileUpload(e.target.files, "images")}
                    className="hidden"
                  />
                  <Button type="button" variant="outline" onClick={() => document.getElementById("images")?.click()}>
                    Choose Images
                  </Button>
                </div>
                {propertyListing.images.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm text-green-600">✓ {propertyListing.images.length} images selected</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="age">Property Age</Label>
                  <Select
                    value={propertyListing.age}
                    onValueChange={(value) => setPropertyListing((prev) => ({ ...prev, age: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select age" />
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

                <div>
                  <Label htmlFor="condition">Condition</Label>
                  <Select
                    value={propertyListing.condition}
                    onValueChange={(value) => setPropertyListing((prev) => ({ ...prev, condition: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="needs-renovation">Needs Renovation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="furnishing">Furnishing</Label>
                  <Select
                    value={propertyListing.furnishing}
                    onValueChange={(value) => setPropertyListing((prev) => ({ ...prev, furnishing: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select furnishing" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unfurnished">Unfurnished</SelectItem>
                      <SelectItem value="semi-furnished">Semi-furnished</SelectItem>
                      <SelectItem value="fully-furnished">Fully Furnished</SelectItem>
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
                        checked={propertyListing.amenities.includes(amenity)}
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
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Phone className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact & Availability</h3>
              <p className="text-gray-600">Provide contact details and availability information</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="ownerName">Owner Name *</Label>
                <Input
                  id="ownerName"
                  value={propertyListing.ownerName}
                  onChange={(e) => setPropertyListing((prev) => ({ ...prev, ownerName: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="ownerPhone">Phone Number *</Label>
                <Input
                  id="ownerPhone"
                  type="tel"
                  placeholder="+971 50 123 4567"
                  value={propertyListing.ownerPhone}
                  onChange={(e) => setPropertyListing((prev) => ({ ...prev, ownerPhone: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="ownerEmail">Email Address *</Label>
                <Input
                  id="ownerEmail"
                  type="email"
                  value={propertyListing.ownerEmail}
                  disabled
                  className="bg-gray-50"
                />
              </div>

              <div>
                <Label htmlFor="availableFrom">Available From</Label>
                <Input
                  id="availableFrom"
                  type="date"
                  value={propertyListing.availableFrom}
                  onChange={(e) => setPropertyListing((prev) => ({ ...prev, availableFrom: e.target.value }))}
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="viewingTimes">Preferred Viewing Times</Label>
                <Textarea
                  id="viewingTimes"
                  placeholder="e.g., Weekdays 2-6 PM, Weekends 10 AM - 8 PM"
                  rows={2}
                  value={propertyListing.viewingTimes}
                  onChange={(e) => setPropertyListing((prev) => ({ ...prev, viewingTimes: e.target.value }))}
                />
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-800">Ready to List</h4>
                  <p className="text-sm text-green-700 mt-1">
                    Your property listing is complete and ready for submission. It will be reviewed and published within
                    24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-green-800">Listing Submitted Successfully!</h3>
              <p className="text-gray-600 mb-6">
                Your property listing has been submitted for review. You'll receive a confirmation email once it's
                approved and published.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg text-left max-w-md mx-auto">
                <h4 className="font-semibold text-blue-800 mb-3">What happens next?</h4>
                <div className="space-y-2 text-sm text-blue-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Document verification (24-48 hours)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Listing review and approval</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Property goes live on platform</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Start receiving inquiries</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4 mt-6">
                <Button onClick={() => (window.location.href = "/")}>Back to Home</Button>
                <Button variant="outline" onClick={() => window.location.reload()}>
                  List Another Property
                </Button>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return userAuth.isAuthenticated
      case 2:
        return propertyListing.emiratesId && propertyListing.titleDeed
      case 3:
        return (
          propertyListing.title &&
          propertyListing.propertyType &&
          propertyListing.emirate &&
          propertyListing.area_name &&
          propertyListing.bedrooms &&
          propertyListing.bathrooms &&
          propertyListing.area &&
          propertyListing.askingPrice &&
          propertyListing.description
        )
      case 4:
        return propertyListing.images.length > 0
      case 5:
        return propertyListing.ownerName && propertyListing.ownerPhone
      default:
        return true
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">{t("propertyListingTitle")}</h1>
            <p className="text-xl text-gray-600 mb-6">{t("propertyListingDescription")}</p>

            {/* Progress Steps */}
            {userAuth.isAuthenticated && (
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-4">
                  {[1, 2, 3, 4, 5, 6].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          step <= currentStep ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {step === 6 ? <CheckCircle className="h-4 w-4" /> : step}
                      </div>
                      {step < 6 && (
                        <div className={`w-12 h-0.5 ${step < currentStep ? "bg-blue-500" : "bg-gray-200"}`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              {renderStep()}

              {currentStep < 6 && (
                <>
                  <Separator className="my-8" />

                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                      disabled={currentStep === 1 || isLoading}
                    >
                      {t("previous")}
                    </Button>

                    {currentStep < 5 ? (
                      <Button onClick={() => setCurrentStep((prev) => prev + 1)} disabled={!canProceed() || isLoading}>
                        {t("next")}
                      </Button>
                    ) : (
                      <Button
                        onClick={handleSubmitListing}
                        disabled={!canProceed() || isLoading}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          "Submit Listing"
                        )}
                      </Button>
                    )}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
