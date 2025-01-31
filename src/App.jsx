import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Shield, Tag, Search, Users, Ticket, Clock, CheckCircle } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">TicketTrust</Link>
              
              <div className="flex items-center space-x-4">
                <Link to="/buy-tickets" className="px-4 py-2 text-gray-600 hover:text-gray-900">
                  Buy Tickets
                </Link>
                <Link to="/sell-tickets" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Sell Tickets
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <main>
              {/* Hero Section */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    The Safest Way to Buy and Sell Event Tickets
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-blue-100">
                    TicketTrust ensures secure transactions with blockchain verification and escrow protection
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Link to="/buy-tickets" className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50">
                      Find Tickets
                    </Link>
                    <Link to="/sell-tickets" className="px-8 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600">
                      List Your Tickets
                    </Link>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12">How TicketTrust Works</h2>
                  
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* For Buyers */}
                    <div className="space-y-8">
                      <h3 className="text-2xl font-bold text-blue-600 mb-6">For Buyers</h3>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <Shield className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                          <div>
                            <h4 className="font-bold mb-1">Verified Authentic Tickets</h4>
                            <p className="text-gray-600">Every ticket is verified through blockchain technology</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Tag className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                          <div>
                            <h4 className="font-bold mb-1">Fair Prices</h4>
                            <p className="text-gray-600">Compare prices from different sellers</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                          <div>
                            <h4 className="font-bold mb-1">Money-Back Guarantee</h4>
                            <p className="text-gray-600">Full refund if tickets are invalid</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* For Sellers */}
                    <div className="space-y-8">
                      <h3 className="text-2xl font-bold text-green-600 mb-6">For Sellers</h3>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <Clock className="w-6 h-6 text-green-600 mt-1 mr-4" />
                          <div>
                            <h4 className="font-bold mb-1">Quick Listing Process</h4>
                            <p className="text-gray-600">List your tickets in minutes with our easy process</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Users className="w-6 h-6 text-green-600 mt-1 mr-4" />
                          <div>
                            <h4 className="font-bold mb-1">Reach More Buyers</h4>
                            <p className="text-gray-600">Connect with verified buyers through our platform</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Ticket className="w-6 h-6 text-green-600 mt-1 mr-4" />
                          <div>
                            <h4 className="font-bold mb-1">Secure Payment</h4>
                            <p className="text-gray-600">Get paid securely through our escrow system</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                  <h2 className="text-3xl font-bold mb-12">Why Choose TicketTrust?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-blue-600 mb-4">
                        <Shield className="w-12 h-12 mx-auto" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">100% Secure</h3>
                      <p className="text-gray-600">Blockchain verification ensures ticket authenticity</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-blue-600 mb-4">
                        <Users className="w-12 h-12 mx-auto" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Verified Users</h3>
                      <p className="text-gray-600">All users are verified through government ID</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-blue-600 mb-4">
                        <Tag className="w-12 h-12 mx-auto" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Best Prices</h3>
                      <p className="text-gray-600">Compare prices from multiple sellers</p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          } />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-800 text-white mt-12">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">TicketTrust</h3>
                <p className="text-gray-300">
                  India's most trusted ticket reselling platform with blockchain verification
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>How It Works</li>
                  <li>Seller Verification</li>
                  <li>Buyer Protection</li>
                  <li>FAQs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>support@tickettrust.in</li>
                  <li>+91 1800-123-4567</li>
                  <li>Mumbai, India</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;