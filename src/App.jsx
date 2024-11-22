import { useEffect, useState } from 'react';
import Card from './card';

function App() {
  const [userName, setUserName] = useState('parv68');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGitHubUserData() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit() {
    fetchGitHubUserData();
  }

  useEffect(() => {
    fetchGitHubUserData();
  }, []); // Add dependency array to prevent repeated calls

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="github-profile-container">
      <input
        type="text"
        name="search-by-username"
        placeholder="Search GitHub username..."
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
      {userData && <Card user={userData} />} {/* Correct prop name */}
    </div>
  );
}

export default App;
