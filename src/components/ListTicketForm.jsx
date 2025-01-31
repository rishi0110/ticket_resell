import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const ListTicketForm = () => {
  const [ticketData, setTicketData] = useState({
    event: '',
    venue: '',
    date: '',
    time: '',
    price: '',
    quantity: 1,
    section: '',
    row: '',
    seat: '',
    ticketImage: null,
    proofOfPurchase: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here we would typically upload to a server
    // For now, we'll simulate a submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Ticket listed:', ticketData);
    
    // Reset form
    setTicketData({
      event: '',
      venue: '',
      date: '',
      time: '',
      price: '',
      quantity: 1,
      section: '',
      row: '',
      seat: '',
      ticketImage: null,
      proofOfPurchase: null
    });
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">List Your Ticket</h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <div className="flex items-center">
          <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
          <p className="text-sm text-blue-700">
            To maintain trust, we verify all tickets before listing. Please provide accurate information.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Name*
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={ticketData.event}
              onChange={(e) => setTicketData({...ticketData, event: e.target.value})}
              placeholder="e.g., Arijit Singh Concert"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Venue*
            </label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={ticketData.venue}
              onChange={(e) => setTicketData({...ticketData, venue: e.target.value})}
              placeholder="e.g., DY Patil Stadium"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date*
            </label>
            <input
              type="date"
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={ticketData.date}
              onChange={(e) => setTicketData({...ticketData, date: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time*
            </label>
            <input
              type="time"
              required
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={ticketData.time}
              onChange={(e) => setTicketData({...ticketData, time: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price (₹)*
            </label>
            <input
              type="number"
              required
              min="0"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={ticketData.price}
              onChange={(e) => setTicketData({...ticketData, price: e.target.value})}
              placeholder="e.g., 5000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity*
            </label>
            <input
              type="number"
              required
              min="1"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={ticketData.quantity}
              onChange={(e) => setTicketData({...ticketData, quantity: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Section
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={ticketData.section}
              onChange={(e) => setTicketData({...ticketData, section: e.target.value})}
              placeholder="e.g., A"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Row
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={ticketData.row}
              onChange={(e) => setTicketData({...ticketData, row: e.target.value})}
              placeholder="e.g., 1"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Ticket Image*
            </label>
            <input
              type="file"
              required
              accept="image/*"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setTicketData({...ticketData, ticketImage: e.target.files[0]})}
            />
            <p className="mt-1 text-sm text-gray-500">Upload a clear image of your ticket (max 5MB)</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Proof of Purchase*
            </label>
            <input
              type="file"
              required
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setTicketData({...ticketData, proofOfPurchase: e.target.files[0]})}
            />
            <p className="mt-1 text-sm text-gray-500">Upload your original purchase receipt (max 5MB)</p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded">
          <h3 className="font-medium text-gray-700 mb-2">Trust & Safety</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• All tickets are verified before listing</li>
            <li>• Payment is held in escrow until ticket validity is confirmed</li>
            <li>• Your identity will be verified through government ID</li>
            <li>• Fraudulent listings will result in permanent account suspension</li>
          </ul>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'List Ticket for Sale'}
        </button>
      </form>
    </div>
  );
};

export default ListTicketForm;