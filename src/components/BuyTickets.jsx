import React, { useState } from 'react';
import { MapPin, Calendar, Users, Star, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BuyTickets = () => {
  const navigate = useNavigate();
  const [selectedConcert, setSelectedConcert] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Sample data - replace with your actual data
  const locations = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Pune'
  ];

  const concerts = [
    {
      id: 1,
      name: 'Arijit Singh Live',
      locations: ['Mumbai', 'Delhi', 'Bangalore'],
      dates: {
        'Mumbai': '2025-03-15',
        'Delhi': '2025-03-22',
        'Bangalore': '2025-03-29'
      }
    },
    {
      id: 2,
      name: 'Divine Rap Night',
      locations: ['Mumbai', 'Pune'],
      dates: {
        'Mumbai': '2025-04-05',
        'Pune': '2025-04-12'
      }
    },
    {
      id: 3,
      name: 'Dua Lipa World Tour',
      locations: ['Mumbai', 'Delhi'],
      dates: {
        'Mumbai': '2025-04-20',
        'Delhi': '2025-04-27'
      }
    }
  ];

  const availableTickets = [
    {
      id: 1,
      concertId: 1,
      location: 'Mumbai',
      type: 'VIP',
      price: 10000,
      originalPrice: 12000,
      quantity: 2,
      section: 'A',
      row: '1',
      sellerRating: 4.8,
      totalSales: 24
    },
    {
      id: 2,
      concertId: 1,
      location: 'Mumbai',
      type: 'Premium',
      price: 7000,
      originalPrice: 8000,
      quantity: 3,
      section: 'B',
      row: '5',
      sellerRating: 4.5,
      totalSales: 12
    },
    // Add more ticket listings as needed
  ];

  const [filteredTickets, setFilteredTickets] = useState(availableTickets);

  const handleFilter = () => {
    const filtered = availableTickets.filter(ticket => 
      (!selectedConcert || ticket.concertId === parseInt(selectedConcert)) &&
      (!selectedLocation || ticket.location === selectedLocation)
    );
    setFilteredTickets(filtered);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Find Available Tickets</h1>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Concert
            </label>
            <select
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedConcert}
              onChange={(e) => setSelectedConcert(e.target.value)}
            >
              <option value="">All Concerts</option>
              {concerts.map(concert => (
                <option key={concert.id} value={concert.id}>
                  {concert.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Location
            </label>
            <select
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={handleFilter}
              className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center"
            >
              <Search className="w-4 h-4 mr-2" />
              Search Tickets
            </button>
          </div>
        </div>
      </div>

      {/* Ticket Listings */}
      <div className="space-y-4">
        {filteredTickets.map(ticket => {
          const concert = concerts.find(c => c.id === ticket.concertId);
          return (
            <div key={ticket.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-2">{concert?.name}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {ticket.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {concert?.dates[ticket.location]}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Section {ticket.section}, Row {ticket.row}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-lg font-bold text-green-600">₹{ticket.price.toLocaleString()}</div>
                  <div className="text-sm text-gray-500 line-through">₹{ticket.originalPrice.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">{ticket.quantity} tickets available</div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" />
                    {ticket.sellerRating} ({ticket.totalSales} sales)
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <button
                    onClick={() => {/* Handle purchase */}}
                    className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredTickets.length === 0 && (
        <div className="text-center py-8 text-gray-600">
          No tickets found for the selected criteria.
        </div>
      )}
    </div>
  );
};

export default BuyTickets;