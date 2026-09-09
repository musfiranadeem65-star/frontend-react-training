
import React, { useState, useEffect,useRef } from "react";
import axios from "axios";

const ApiDataPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  const hasFetched = useRef(false);
  const fetchUsers = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    setPosts(response.data);
  };

  useEffect(() => {
     if (hasFetched.current) {
    return;
  }

  hasFetched.current = true;

    fetchUsers();
    fetchPosts();
  }, []);

  // Search ke according posts filter hongi
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>API Data</h1>

      {error && (
        <div>
          <p>{error}</p>
          <button onClick={fetchUsers}>Retry</button>
        </div>
      )}

      <h2>Users</h2>

      {loading ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))
      )}

      <h2>Posts</h2>

      <input
        type="text"
        placeholder="Search post title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredPosts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        filteredPosts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
          </div>
        ))
      )}
    </div>
  );
};

export default ApiDataPage;

