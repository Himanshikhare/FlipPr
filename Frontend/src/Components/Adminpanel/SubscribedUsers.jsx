import React, { useEffect, useState } from "react";
import axios from "axios";

const SubscribedUsers = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/subscribers");
        setSubscribers(response.data);
      } catch (error) {
        console.error("Error fetching subscribers:", error);
      }
    };
    fetchSubscribers();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Subscribed Users</h2>
      <ul>
        {subscribers.map((subscriber) => (
          <li key={subscriber._id}>{subscriber.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubscribedUsers;
