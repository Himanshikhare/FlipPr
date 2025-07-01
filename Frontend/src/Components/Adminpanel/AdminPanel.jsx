import React from "react";
import ProjectManagement from "./ProjectManagement";
import ClientManagement from "./ClientManagement";
import ContactFormResponses from "./ContactFormResponses";
import SubscribedUsers from "./SubscribedUsers";

const AdminPanel = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Admin Panel</h1>

      <section className="mb-8">
        <ProjectManagement />
      </section>

      <section className="mb-8">
        <ClientManagement />
      </section>

      <section className="mb-8">
        <ContactFormResponses />
      </section>

      <section>
        <SubscribedUsers />
      </section>
    </div>
  );
};

export default AdminPanel;

