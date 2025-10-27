
import { useEffect, useState } from 'react';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiry_type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.title = 'Contact Us - TravelSmart';
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    if (formData.message.length > 500) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://readdy.ai/api/form/d3v9bfhsbcb07rsl7pn0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          inquiry_type: 'general'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 to-emerald-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions about your travel plans? Need help with bookings? We're here to help you every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  
                  {/* Get in Touch */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">
                      Our travel experts are ready to help you plan your perfect trip. Reach out to us through any of the channels below.
                    </p>
                  </div>

                  {/* Contact Methods */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-mail-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                        <p className="text-gray-600 text-sm mb-2">Get a response within 24 hours</p>
                        <a href="mailto:support@travelsmart.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
                          support@travelsmart.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-phone-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                        <p className="text-gray-600 text-sm mb-2">Mon-Fri, 9AM-6PM EST</p>
                        <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-700 font-medium">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-map-pin-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                        <p className="text-gray-600 text-sm mb-2">Our headquarters</p>
                        <address className="text-purple-600 not-italic">
                          123 Travel Street<br />
                          Suite 100<br />
                          New York, NY 10001
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-chat-3-line text-white text-xl"></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
                        <p className="text-gray-600 text-sm mb-2">Available 24/7 for urgent inquiries</p>
                        <button className="text-green-600 hover:text-green-700 font-medium">
                          Start Chat
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Business Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="text-gray-900">9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday</span>
                        <span className="text-gray-900">10:00 AM - 4:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday</span>
                        <span className="text-gray-900">Closed</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  
                  <form id="contact-form" onSubmit={handleSubmit} data-readdy-form className="space-y-6">
                    
                    {/* Name and Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label htmlFor="inquiry_type" className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="inquiry_type"
                        name="inquiry_type"
                        value={formData.inquiry_type}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm pr-8"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="booking">Booking Assistance</option>
                        <option value="technical">Technical Support</option>
                        <option value="partnership">Partnerhip Opportunities</option>
                        <option value="feedback">Feedback & Suggestions</option>
                        <option value="press">Press & Media</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message * <span className="text-gray-500 text-xs">(Max 500 characters)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        maxLength={500}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-sm resize-none"
                        placeholder="Please provide details about your inquiry..."
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        {formData.message.length}/500 characters
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <i className="ri-loader-4-line animate-spin mr-2"></i>
                            Sending Message...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <i className="ri-send-plane-line mr-2"></i>
                            Send Message
                          </span>
                        )}
                      </button>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <i className="ri-check-circle-line text-green-600 text-xl mr-3"></i>
                          <div>
                            <h4 className="font-medium text-green-900">Message Sent Successfully!</h4>
                            <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <i className="ri-error-warning-line text-red-600 text-xl mr-3"></i>
                          <div>
                            <h4 className="font-medium text-red-900">Error Sending Message</h4>
                            <p className="text-red-700 text-sm">Please check all fields and try again, or contact us directly.</p>
                          </div>
                        </div>
                      </div>
                    )}

                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Quick answers to common questions</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">How quickly do you respond to inquiries?</h3>
                  <p className="text-gray-600 text-sm">We typically respond to all inquiries within 24 hours during business days. Urgent matters are handled within 2-4 hours.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Can you help with last-minute bookings?</h3>
                  <p className="text-gray-600 text-sm">Yes! Our team specializes in last-minute travel arrangements. Contact us by phone for the fastest assistance with urgent bookings.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibent text-gray-900 mb-2">Do you charge fees for booking assistance?</h3>
                  <p className="text-gray-600 text-sm">Our basic travel advice and booking assistance is completely free. We earn commissions from our travel partners when you book through our platform.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">What if I need to cancel or modify my booking?</h3>
                  <p className="text-gray-600 text-sm">Cancellation and modification policies vary by provider. Contact us immediately and we'll help you understand your options and process any changes.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Do you offer group travel planning?</h3>
                  <p className="text-gray-600 text-sm">Absolutely! We specialize in group travel for families, corporate events, and special occasions. Contact us to discuss your group's specific needs.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Can you help with travel insurance?</h3>
                  <p className="text-gray-600 text-sm">Yes, we can recommend and help you purchase travel insurance that fits your specific trip and coverage needs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
