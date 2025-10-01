import React, { useState } from "react";
import './service.css';
import residentialImg from '../components/images/residential.jpg';
import commercialImg from '../components/images/commercial.jpg';
import filtrationImg from '../components/images/filtration.webp';
import consultingImg from '../components/images/consulting.webp';

function Services() {
  const services = [
    { 
      id: 1,
      title: "Residential Supply", 
      desc: "Safe and affordable water for your home, delivered directly.", 
      price: 2000, // Naira
      img: residentialImg
    },
    { 
      id: 2,
      title: "Commercial Solutions", 
      desc: "Customized water supply for offices, factories, and industries.", 
      price: 5000, 
      img: commercialImg
    },
    { 
      id: 3,
      title: "Water Filtration", 
      desc: "State-of-the-art purification systems for guaranteed safety.", 
      price: 8000, 
      img: filtrationImg
    },
    { 
      id: 4,
      title: "Consulting & Installation", 
      desc: "Expert advice and system installation for clean water access.", 
      price: 10000, 
      img: consultingImg
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (service, quantity) => {
    const item = { ...service, quantity };
    setCart([...cart, item]);
    alert(`${quantity} x ${service.title} added to cart!`);
  };

  return (
    <div className="services-page px-6 py-12 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Our Services</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Choose the water solutions you need, set quantities, and add to your cart. Prices are in Naira.
        </p>
        <p className="mt-4 font-semibold text-blue-700">
          Cart Items: {cart.length}
        </p>
      </div>

      <div className="grid gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ service, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const total = service.price * quantity;

  return (
    <div className="service-card flex flex-col md:flex-row items-start bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 p-6 gap-6">
      
      {/* Left: Image + info */}
      <div className="flex-shrink-0 flex flex-col items-center md:items-start">
        <img src={service.img} alt={service.title} className="w-32 h-32 object-contain mb-4 md:mb-0"/>
        <h3 className="text-2xl font-semibold text-blue-600">{service.title}</h3>
        <p className="text-gray-700 mt-2">{service.desc}</p>
        <p className="text-gray-800 font-bold mt-2">₦{service.price.toLocaleString()}</p>
      </div>

      {/* Right: Add to cart form */}
      <div className="flex-1 flex flex-col justify-center items-start md:items-end">
        <label className="mb-2 font-semibold text-gray-700">
          Quantity:
          <input 
            type="number" 
            min="1" 
            value={quantity} 
            onChange={(e) => setQuantity(Number(e.target.value))} 
            className="ml-2 w-20 px-2 py-1 border rounded-md"
          />
        </label>
        <p className="mb-2 font-semibold text-gray-700">Total: ₦{total.toLocaleString()}</p>
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          onClick={() => addToCart(service, quantity)}
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}

export default Services;
