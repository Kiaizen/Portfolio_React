import { useEffect, useState } from "react";

const API = "http://localhost/portfolio/backend/api/";

interface Props {
  editingUser: any;
  setEditingUser: (user: any) => void;
}

const UserForm = ({ editingUser, setEditingUser }: Props) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  useEffect(() => {
    if (editingUser) setFormData(editingUser);
  }, [editingUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = formData.id ? `${API}update.php` : `${API}create.php`;
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setFormData({ id: "", name: "", email: "", mobile: "", password: "" });
    setEditingUser(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8 text-black">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full p-2 border"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 border"
      />
      <input
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Mobile"
        className="w-full p-2 border"
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-full p-2 border"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        {formData.id ? "Update" : "Create"}
      </button>
        {editingUser && (
          <button
            type="button"
            onClick={() => setEditingUser(null)}
            className="ml-2 text-red-500 underline"
          >
            Cancelar
          </button>
        )}
    </form>
  );
};

export default UserForm;
