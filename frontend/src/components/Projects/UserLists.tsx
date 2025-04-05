import  { useEffect, useState } from 'react';

const API = 'http://localhost/portfolio/backend/api/';

interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  password: string;
}

const UserList = ({ setEditingUser }: { setEditingUser: (user: User) => void }) => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const res = await fetch(`${API}read.php`);
    const data = await res.json();
    setUsers(data);
  };

  const deleteUser = async (id: string) => {
    await fetch(`${API}delete.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className="border p-4 my-2 flex justify-between items-center">
            <div>
              <p><strong>{user.name}</strong> ({user.email})</p>
              <p>📱 {user.mobile}</p>
            </div>
            <div className="space-x-2">
              <button onClick={() => setEditingUser(user)} className="text-blue-500 hover:underline">Edit</button>
              <button onClick={() => deleteUser(user.id)} className="text-red-500 hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
