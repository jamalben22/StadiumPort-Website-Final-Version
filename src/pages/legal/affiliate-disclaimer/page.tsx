
import { useEffect } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export default function AffiliateDisclaimerPage() {
  useEffect(() => {
    document.title = 'Affiliate Disclaimer - TravelSmart';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Affiliate Disclaimer
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transparency is important to us. This disclaimer explains our affiliate relationships and how we may earn commissions.
              </p>
              <div className="mt-6 text-sm text-gray-500">
                Last updated: January 2024
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              {/* Disclosure Statement */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclosure Statement</h2>
                
                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-6">
                  <p className="text-orange-800 text-lg font-medium">
                    TravelSmart participates in various affiliate marketing programs, which means we may earn commissions from qualifying purchases made through links on our website.
                  </p>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>
                    This disclosure is made in accordance with the Federal Trade Commission's 16 CFR, Part 255: "Guides Concerning the Use of Endorsements and Testimonials in Advertising."
                  </p>
                  
                  <p>
                    We want to be completely transparent about our business model and how we generate revenue to provide you with free, high-quality travel content and services.
                  </p>
                </div>
              </div>

              {/* How Affiliate Marketing Works */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How Affiliate Marketing Works</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="ri-link text-white text-xl"></i>
                    </div>
                    <h3 className="font-semibold text-blue-900 mb-2">1. You Click</h3>
                    <p className="text-blue-800 text-sm">When you click on certain links on our website, you're taken to a partner's site.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="ri-shopping-cart-line text-white text-xl"></i>
                    </div>
                    <h3 className="font-semibold text-green-900 mb-2">2. You Purchase</h3>
                    <p className="text-green-800 text-sm">If you make a purchase, the partner tracks that it came from our referral.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="ri-money-dollar-circle-line text-white text-xl"></i>
                    </div>
                    <h3 className="font-semibold text-purple-900 mb-2">3. We Earn</h3>
                    <p className="text-purple-800 text-sm">We receive a small commission at no extra cost to you.</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-3">Important: No Extra Cost to You</h3>
                  <p className="text-green-800">
                    When you make a purchase through our affiliate links, you pay the same price you would pay going directly to the merchant's website. The commission we receive comes from the merchant, not from any additional charge to you.
                  </p>
                </div>
              </div>

              {/* Our Affiliate Partners */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Affiliate Partners</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Travel Booking Platforms</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Hotel booking websites (Booking.com, Hotels.com, Expedia)</li>
                      <li>• Flight comparison sites (Kayak, Skyscanner, Momondo)</li>
                      <li>• Vacation rental platforms (Airbnb, VRBO)</li>
                      <li>• Car rental services (Enterprise, Hertz, Budget)</li>
                      <li>• Travel insurance providers</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Travel Gear & Services</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Luggage and travel accessories</li>
                      <li>• Travel guides and books</li>
                      <li>• Photography equipment</li>
                      <li>• Travel apps and software</li>
                      <li>• Language learning platforms</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Our Editorial Standards */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Editorial Standards</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Independence First</h3>
                    <p className="text-blue-800">
                      Our editorial content is created independently of our affiliate relationships. We recommend products and services based on our genuine experience and research, not because of potential commissions.
                    </p>
                  </div>

                  <div className="bg-emerald-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-emerald-900 mb-4">Honest Reviews</h3>
                    <p className="text-emerald-800">
                      We provide honest, unbiased reviews and recommendations. If we have a negative experience with an affiliate partner's service, we will share that honestly with our readers.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-purple-900 mb-4">Clear Disclosure</h3>
                    <p className="text-purple-800">
                      We clearly mark affiliate links and sponsored content. Look for phrases like "affiliate link," "sponsored," or "partner link" when they appear in our content.
                    </p>
                  </div>
                </div>
              </div>

              {/* Types of Affiliate Content */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Affiliate Content</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-article-line text-white text-sm"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Product Reviews</h3>
                      <p className="text-gray-700 text-sm">Detailed reviews of travel-related products and services, which may include affiliate links to purchase items.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-list-check text-white text-sm"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Recommendation Lists</h3>
                      <p className="text-gray-700 text-sm">Curated lists of recommended hotels, restaurants, activities, and services in various destinations.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-guide-line text-white text-sm"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Travel Guides</h3>
                      <p className="text-gray-700 text-sm">Comprehensive destination guides that may include booking links for accommodations and activities.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-price-tag-3-line text-white text-sm"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Deal Alerts</h3>
                      <p className="text-gray-700 text-sm">Special offers and discounts from our partners, clearly marked as promotional content.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights as a Reader */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights as a Reader</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-emerald-600 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">No Obligation</h3>
                        <p className="text-gray-600 text-sm">You are never obligated to purchase anything through our affiliate links.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-emerald-600 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Direct Access</h3>
                        <p className="text-gray-600 text-sm">You can always go directly to any merchant's website instead of using our links.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-emerald-600 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Same Prices</h3>
                        <p className="text-gray-600 text-sm">Prices are the same whether you use our links or not.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-emerald-600 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Honest Content</h3>
                        <p className="text-gray-600 text-sm">Our content remains honest and unbiased regardless of affiliate relationships.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-emerald-600 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Clear Disclosure</h3>
                        <p className="text-gray-600 text-sm">We always disclose when content contains affiliate links or is sponsored.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-emerald-600 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Free Content</h3>
                        <p className="text-gray-600 text-sm">Our travel guides and tips remain completely free to access.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How This Helps You */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How This Helps You</h2>
                
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-900 mb-4">Free Quality Content</h3>
                      <p className="text-emerald-800 mb-4">
                        Affiliate commissions allow us to provide high-quality travel content, guides, and tools completely free of charge.
                      </p>
                      <ul className="space-y-1 text-emerald-700 text-sm">
                        <li>• Detailed destination guides</li>
                        <li>• Travel tips and advice</li>
                        <li>• Deal alerts and discounts</li>
                        <li>• Customer support</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-900 mb-4">Curated Recommendations</h3>
                      <p className="text-emerald-800 mb-4">
                        We research and test products and services so you don't have to, saving you time and helping you make informed decisions.
                      </p>
                      <ul className="space-y-1 text-emerald-700 text-sm">
                        <li>• Vetted travel partners</li>
                        <li>• Honest reviews and ratings</li>
                        <li>• Price comparisons</li>
                        <li>• Expert recommendations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Our Affiliate Program</h2>
                
                <div className="bg-orange-50 rounded-lg p-6">
                  <p className="text-orange-800 mb-4">
                    If you have any questions about our affiliate relationships or this disclaimer, please don't hesitate to contact us:
                  </p>
                  
                  <div className="space-y-2 text-orange-700">
                    <p><strong>Email:</strong> affiliates@travelsmart.com</p>
                    <p><strong>Address:</strong> 123 Travel Street, Suite 100, New York, NY 10001</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              {/* Final Note */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Our Commitment</h3>
                <p className="text-blue-800">
                  We are committed to transparency and providing value to our readers. Our affiliate relationships help us maintain this free resource while ensuring we can continue to provide honest, helpful travel advice. Thank you for supporting TravelSmart by using our affiliate links when you choose to make purchases.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
