import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:5000/api/subscribe", { email });
    console.log("Subscribed successfully:", response.data);
  } catch (error) {
    console.error("Error subscribing:", error);
  }
};


  return (
    <section className="bg-blue-100 h-30">

      <div className="flex gap-12 text-black">
        <ul className='flex font-medium items-center gap-10'>
          <Link to="/"><li className="hover:cursor-pointer">Home</li></Link>
          <li className="hover:cursor-pointer">Services</li>
          <li className="hover:cursor-pointer">Projects</li>
          <li className="hover:cursor-pointer">Testomonoids</li>
          <li className="hover:cursor-pointer">Contact</li>

        </ul>

      </div>
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:w-2/3 px-4 py-2 rounded bg-white text-gray-800 border border-gray-300 focus:ring-2 focus:ring-blue-800"
          />
          <button
            type="submit"
            className="bg-blue-800 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
        {message && (
          <p className="mt-4 text-green-600 font-semibold">{message}</p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
