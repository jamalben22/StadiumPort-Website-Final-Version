
import { useEffect } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms of Service - TravelSmart';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Please read these terms carefully before using our services. By using TravelSmart, you agree to these terms.
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
              
              {/* Acceptance of Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Acceptance of Terms</h2>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                  <p className="text-blue-800">
                    By accessing and using TravelSmart ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p>These Terms of Service ("Terms") govern your use of our website, mobile application, and related services. The Terms constitute a legally binding agreement between you and TravelSmart.</p>
                  
                  <p>We reserve the right to update these Terms at any time without prior notice. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.</p>
                </div>
              </div>

              {/* Use of Service */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Use of Service</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Permitted Uses</h3>
                    <ul className="space-y-2 text-green-800">
                      <li>• Search and book travel accommodations</li>
                      <li>• Access travel guides and information</li>
                      <li>• Create and manage your account</li>
                      <li>• Communicate with customer support</li>
                      <li>• Share reviews and experiences</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-red-900 mb-4">Prohibited Uses</h3>
                    <ul className="space-y-2 text-red-800">
                      <li>• Violate any applicable laws or regulations</li>
                      <li>• Impersonate others or provide false information</li>
                      <li>• Interfere with service functionality</li>
                      <li>• Upload malicious content or viruses</li>
                      <li>• Engage in fraudulent activities</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Account Responsibilities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Account Responsibilities</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Security</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• You are responsible for maintaining the confidentiality of your account credentials</li>
                      <li>• You must notify us immediately of any unauthorized use of your account</li>
                      <li>• You are liable for all activities that occur under your account</li>
                      <li>• We recommend using strong, unique passwords and enabling two-factor authentication</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Accurate Information</h3>
                    <p className="text-gray-700">
                      You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete. Providing false information may result in account suspension or termination.
                    </p>
                  </div>
                </div>
              </div>

              {/* Booking and Payments */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Booking and Payments</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-6 bg-emerald-50 rounded-lg">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="ri-calendar-check-line text-white text-xl"></i>
                    </div>
                    <h3 className="font-semibold text-emerald-900 mb-2">Booking Confirmation</h3>
                    <p className="text-emerald-800 text-sm">All bookings are subject to availability and confirmation by service providers.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="ri-secure-payment-line text-white text-xl"></i>
                    </div>
                    <h3 className="font-semibold text-blue-900 mb-2">Secure Payments</h3>
                    <p className="text-blue-800 text-sm">All payments are processed securely through encrypted payment gateways.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="ri-refund-line text-white text-xl"></i>
                    </div>
                    <h3 className="font-semibold text-purple-900 mb-2">Cancellation Policy</h3>
                    <p className="text-purple-800 text-sm">Cancellation terms vary by provider and are clearly stated during booking.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-3">Important Notice</h3>
                  <p className="text-yellow-800">
                    TravelSmart acts as an intermediary between you and travel service providers. We are not responsible for the quality, safety, or legality of services provided by third parties. All bookings are subject to the terms and conditions of the respective service providers.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Content</h3>
                    <p className="text-gray-700 mb-4">
                      All content on TravelSmart, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of TravelSmart or its content suppliers and is protected by copyright laws.
                    </p>
                    <p className="text-gray-700">
                      You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our content without our prior written consent.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">User Content</h3>
                    <p className="text-gray-700">
                      By submitting content to TravelSmart (reviews, photos, comments), you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and display such content in connection with our services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="space-y-4 text-red-800">
                    <p>
                      <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, TRAVELSMART SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.</strong>
                    </p>
                    
                    <p>
                      Our total liability to you for all claims arising from or relating to the service shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.
                    </p>
                    
                    <p>
                      We are not responsible for delays, cancellations, or other issues caused by third-party service providers, natural disasters, government actions, or other circumstances beyond our reasonable control.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dispute Resolution */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Dispute Resolution</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Informal Resolution</h3>
                    <p className="text-blue-800">
                      Before filing a formal dispute, please contact our customer service team. We are committed to resolving issues quickly and fairly through direct communication.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">Formal Arbitration</h3>
                    <p className="text-green-800">
                      Any disputes that cannot be resolved informally will be settled through binding arbitration in accordance with the rules of the American Arbitration Association.
                    </p>
                  </div>
                </div>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.
                  </p>
                  
                  <p>
                    You may terminate your account at any time by contacting customer service or using the account deletion feature in your profile settings.
                  </p>
                  
                  <p>
                    Upon termination, your right to use the Service will cease immediately, but provisions that by their nature should survive termination will remain in effect.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in New York, New York.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                
                <div className="bg-emerald-50 rounded-lg p-6">
                  <p className="text-emerald-800 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  
                  <div className="space-y-2 text-emerald-700">
                    <p><strong>Email:</strong> legal@travelsmart.com</p>
                    <p><strong>Address:</strong> 123 Travel Street, Suite 100, New York, NY 10001</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              {/* Severability */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Severability</h3>
                <p className="text-blue-800">
                  If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
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
