import { useState } from "react";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    role: "Frontend Developer",
    location: "London, UK",
    joined: "January 2024",
    bio: "Passionate about building clean UI and exploring data analytics.",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>

      {!editMode ? (
        // View Mode
        <div>
          <div className="flex items-center gap-6 border-b border-gray-300 pb-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-3xl font-bold">
              {formData.name.charAt(0)}
            </div>

            <div>
              <h2 className="text-3xl font-bold">{formData.name}</h2>
              <p className="text-gray-700">{formData.role}</p>
              <p className="text-gray-500">{formData.email}</p>
            </div>
          </div>

          <button onClick={() => setEditMode(true)} className="mt-8 px-4 py-2 border border-black hover:bg-black hover:text-white transition">Edit Profile</button>
        </div>
      ) : (
        // Edit Mode
        <form onSubmit={handleSave} className="space-y-6 max-w-md">
          <div>
            <label className="block font-medium mb-1">Name</label>

            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded"/>
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>

            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded"/>
          </div>

          <div>
            <label className="block font-medium mb-1">Password</label>

            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" placeholder="••••••••"/>
          </div>

          <div className="flex gap-4">
            <button type="submit" className="px-4 py-2 border border-black hover:bg-black hover:text-white transition">
              Save Changes
            </button>

            <button type="button" onClick={() => setEditMode(false)} className="px-4 py-2 border border-gray-300 hover:bg-gray-200 transition">
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
