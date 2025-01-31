import { useState } from 'react';
import { Bell, Search, Calendar, MapPin, Share2, Users, Ticket } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// Concert details component
const ConcertDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const concerts = [
    {
      id: 1,
      event: "Arijit Singh Live in Concert",
      venue: "DY Patil Stadium, Mumbai",
      date: "2025-03-15",
      time: "7:00 PM",
      image: "/api/placeholder/400/200",
      whatsappLink: "https://whatsapp.com/channel/xyz123",
      description: "Experience the magic of Bollywood's most beloved voice",
      tickets: [
        { category: "VIP", price: 10000, available: 50, benefits: ["Front row access", "Meet & Greet", "Exclusive merchandise"] },
        { category: "Premium", price: 7000, available: 100, benefits: ["Priority entry", "Reserved seating"] },
        { category: "Gold", price: 5000, available: 200, benefits: ["Guaranteed seating"] },
        { category: "Silver", price: 3000, available: 300, benefits: ["General entry"] }
      ],
      totalCapacity: 5000,
      venueMap: "/api/placeholder/600/300"
    },
    // ... other concerts with similar structure
  ];

  const concert = concerts.find(c => c.id === Number(id));
  if (!concert) return <div>Concert not found</div>;

  const totalAvailable = concert.tickets.reduce((sum, t) => sum + t.available, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button 
        onClick={() => navigate('/')}
        className="mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Back to all concerts
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src={concert.image} 
            alt={concert.event}
            className="w-full rounded-lg shadow-lg mb-6"
          />
          
          <h1 className="text-3xl font-bold mb-4">{concert.event}</h1>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{new Date(concert.date).toLocaleDateString()} at {concert.time}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{concert.venue}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-2" />
              <span>{totalAvailable} tickets available out of {concert.totalCapacity}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{concert.description}</p>
          
          <img 
            src={concert.venueMap} 
            alt="Venue seating map"
            className="w-full rounded-lg border"
          />
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Available Tickets</h2>
            
            <div className="space-y-4">
              {concert.tickets.map((ticket, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{ticket.category}</h3>
                      <p className="text-2xl font-bold text-green-600">₹{ticket.price.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                        {ticket.available} available
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <h4 className="text-sm font-medium text-gray-600 mb-1">Benefits:</h4>
                    <ul className="text-sm text-gray-600">
                      {ticket.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center justify-center"
                    onClick={() => window.open(concert.whatsappLink, '_blank')}
                  >
                    <Ticket className="w-4 h-4 mr-2" />
                    Join WhatsApp Group
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [concerts] = useState([
    {
      id: 1,
      event: "Arijit Singh Live in Concert",
      venue: "DY Patil Stadium, Mumbai",
      date: "2025-03-15",
      time: "7:00 PM",
      image: "/api/placeholder/400/200",
      whatsappLink: "https://whatsapp.com/channel/xyz123",
      price: "₹3,000 onwards",
      description: "Experience the magic of Bollywood's most beloved voice"
    },
    // ... your other concert data
  ]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">ConcertConnect</Link>
              
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search concerts..."
                    className="w-64 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/concert/:id" element={<ConcertDetails />} />
          <Route path="/" element={
            <main className="max-w-6xl mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-8">Upcoming Concerts</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {concerts.map(concert => (
                  <Link 
                    to={`/concert/${concert.id}`}
                    key={concert.id} 
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <img 
                      src={concert.image} 
                      alt={concert.event}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{concert.event}</h3>
                      <p className="text-gray-600 mb-4">{concert.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(concert.date).toLocaleDateString()} at {concert.time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{concert.venue}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <span className="font-bold">{concert.price}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </main>
          } />
        </Routes>

        <footer className="bg-gray-800 text-white mt-12">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">ConcertConnect</h3>
                <p className="text-gray-300">
                  Join concert communities and never miss an update about your favorite artists.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Popular Cities</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Mumbai</li>
                  <li>Delhi</li>
                  <li>Bangalore</li>
                  <li>Hyderabad</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>support@concertconnect.in</li>
                  <li>+91 1800-123-4567</li>
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