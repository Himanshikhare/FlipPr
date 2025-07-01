import React, { useState, useEffect } from "react";
import axios from "axios";

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", image: null });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("image", form.image);

    try {
      const response = await axios.post("http://localhost:8000/api/projects", formData);
      setProjects([...projects, response.data]);
      setForm({ name: "", description: "", image: null });
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Project Management</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Project Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 mr-2"
          required
        />
        <input
          type="text"
          placeholder="Project Description"
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
          Add Project
        </button>
      </form>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            {project.name} - {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectManagement;
