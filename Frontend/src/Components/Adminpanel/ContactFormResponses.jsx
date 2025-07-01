import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactFormResponses = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/contacts");
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    fetchContacts();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Form Responses</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Full Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Mobile</th>
            <th className="border border-gray-300 px-4 py-2">City</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td className="border border-gray-300 px-4 py-2">{contact.FullName}</td>
              <td className="border border-gray-300 px-4 py-2">{contact.email}</td>
              <td className="border border-gray-300 px-4 py-2">{contact.mobile}</td>
              <td className="border border-gray-300 px-4 py-2">{contact.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactFormResponses;
