import React from 'react'

const Projects = () => {
  const projects = [
    { name: "Project Alpha", status: "Completed" },
    { name: "Project Beta", status: "In Progress" },
    { name: "Project Gamma", status: "Pending" },
  ];

  const statusColors = {
    "Completed": "bg-green-100 text-green-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
    "Pending": "bg-red-100 text-red-700",
  };

  return (
    <>
      <div className="p-6 grid md:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <div
          key={i}
          className="bg-white rounded shadow hover:shadow-lg transition p-6"
        >
          <h3 className="font-bold text-lg">{project.name}</h3>
          <span className={`mt-2 inline-block px-3 py-1 text-sm rounded-full ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>
      ))}
    </div>
    </>
  )
}

export default Projects