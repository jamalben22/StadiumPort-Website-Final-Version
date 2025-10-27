
import { useEffect } from 'react';
import { Header } from '../../../components/feature/Header';
import { Footer } from '../../../components/feature/Footer';

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy - TravelSmart';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
              
              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Name and contact information (email, phone number)</li>
                    <li>• Travel preferences and booking history</li>
                    <li>• Payment information (processed securely by third-party providers)</li>
                    <li>• Account credentials and profile information</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Automatically Collected Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Device information and browser type</li>
                    <li>• IP address and location data</li>
                    <li>• Website usage patterns and analytics</li>
                    <li>• Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-emerald-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-emerald-900 mb-4">Service Provision</h3>
                    <ul className="space-y-2 text-emerald-800">
                      <li>• Process bookings and reservations</li>
                      <li>• Provide customer support</li>
                      <li>• Send booking confirmations</li>
                      <li>• Customize your experience</li>
                    </ul>
                  </div>
                  
                  <div className="bg-teal-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-teal-900 mb-4">Communication</h3>
                    <ul className="space-y-2 text-teal-800">
                      <li>• Send promotional offers</li>
                      <li>• Share travel tips and guides</li>
                      <li>• Notify about service updates</li>
                      <li>• Respond to inquiries</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing</h2>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                  <h3 className="text-xl font-semibold text-yellow-900 mb-3">We Never Sell Your Data</h3>
                  <p className="text-yellow-800">
                    We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                  </p>
                </div>

                <div className="space-y-4 text-gray-700">
                  <p><strong>We may share information with:</strong></p>
                  <ul className="space-y-2 ml-4">
                    <li>• Service providers who help us operate our platform</li>
                    <li>• Travel partners for booking fulfillment</li>
                    <li>• Legal authorities when required by law</li>
                    <li>• Business partners with your explicit consent</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i className="ri-shield-check-line text-white text-xl"></i>
                      </div>
                      <h3 className="font-semibold text-blue-900 mb-2">Encryption</h3>
                      <p className="text-blue-800 text-sm">All data transmitted is encrypted using industry-standard SSL/TLS protocols.</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i className="ri-lock-line text-white text-xl"></i>
                      </div>
                      <h3 className="font-semibold text-blue-900 mb-2">Secure Storage</h3>
                      <p className="text-blue-800 text-sm">Your data is stored on secure servers with restricted access controls.</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i className="ri-eye-line text-white text-xl"></i>
                      </div>
                      <h3 className="font-semibold text-blue-900 mb-2">Monitoring</h3>
                      <p className="text-blue-800 text-sm">We continuously monitor for security threats and vulnerabilities.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-emerald-600 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Access Your Data</h3>
                        <p className="text-gray-600 text-sm">Request a copy of the personal information we hold about you.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-emerald-600 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Correct Information</h3>
                        <p className="text-gray-600 text-sm">Update or correct any inaccurate personal information.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-emerald-600 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Delete Data</h3>
                        <p className="text-gray-600 text-sm">Request deletion of your personal information (subject to legal requirements).</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-emerald-600 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Opt-Out</h3>
                        <p className="text-gray-600 text-sm">Unsubscribe from marketing communications at any time.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-emerald-600 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Data Portability</h3>
                        <p className="text-gray-600 text-sm">Receive your data in a structured, machine-readable format.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-emerald-600 text-xl mt-1"></i>
                      <div>
                        <h3 className="font-semibold text-gray-900">Restrict Processing</h3>
                        <p className="text-gray-600 text-sm">Limit how we process your personal information.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                      <p className="text-gray-600 text-sm">Required for basic site functionality</p>
                    </div>
                    
                    <div className="text-center p-4 bg-white rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                      <p className="text-gray-600 text-sm">Help us understand site usage</p>
                    </div>
                    
                    <div className="text-center p-4 bg-white rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
                      <p className="text-gray-600 text-sm">Enable personalized advertising</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                
                <div className="bg-emerald-50 rounded-lg p-6">
                  <p className="text-emerald-800 mb-4">
                    If you have questions about this Privacy Policy or want to exercise your rights, please contact us:
                  </p>
                  
                  <div className="space-y-2 text-emerald-700">
                    <p><strong>Email:</strong> privacy@travelsmart.com</p>
                    <p><strong>Address:</strong> 123 Travel Street, Suite 100, New York, NY 10001</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Policy Updates</h3>
                <p className="text-blue-800">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
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
