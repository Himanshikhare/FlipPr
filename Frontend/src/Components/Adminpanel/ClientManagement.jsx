import React, { useState, useEffect } from "react";
import axios from "axios";

const ClientManagement = () => {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({ name: "", designation: "", description: "", image: null });

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/clients");
        setClients(response.data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };
    fetchClients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("designation", form.designation);
    formData.append("description", form.description);
    formData.append("image", form.image);

    try {
      const response = await axios.post("http://localhost:8000/api/clients", formData);
      setClients([...clients, response.data]);
      setForm({ name: "", designation: "", description: "", image: null });
    } catch (error) {
      console.error("Error adding client:", error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Client Management</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Client Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 mr-2"
          required
        />
        <input
          type="text"
          placeholder="Designation"
          value={form.designation}
          onChange={(e) => setForm({ ...form, designation: e.target.value })}
          className="border p-2 mr-2"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2 mr-2"
          required
        />
        <input
          type="file"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
          className="border p-2 mr-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Client
        </button>
      </form>
      <ul>
        {clients.map((client) => (
          <li key={client._id}>
            {client.name} - {client.designation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientManagement;
