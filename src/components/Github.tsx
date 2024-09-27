import axios from 'axios';
import { useEffect, useState } from 'react';

interface Git {
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

function Github() {
  const [gitData, setGitData] = useState<Git | null>(null);

  useEffect(() => {
    // Fetch data from GitHub API
    axios.get(`https://api.github.com/users/SameerVohra`)
      .then(res => setGitData(res.data))
      .catch(err => console.error(err)); // Handle errors
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-white text-3xl font-semibold mb-6">GitHub Profile</h1>
      {gitData ? (
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg border border-gray-600 w-80">
          <img
            src={gitData.avatar_url}
            alt={`${gitData.login}'s avatar`}
            className="w-28 h-28 rounded-full border-4 border-blue-500 mb-4"
          />
          <h2 className="text-2xl text-blue-400 font-medium">{gitData.login}</h2>
          <div className="text-white mt-4 w-full">
            <p className="flex justify-between mb-2">
              <span className="font-semibold">Followers:</span>
              <span className="text-blue-300">{gitData.followers}</span>
            </p>
            <p className="flex justify-between mb-2">
              <span className="font-semibold">Following:</span>
              <span className="text-blue-300">{gitData.following}</span>
            </p>
            <p className="flex justify-between mb-2">
              <span className="font-semibold">Public Repositories:</span>
              <span className="text-blue-300">{gitData.public_repos}</span>
            </p>
          </div>
          <a
            href={gitData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
          >
            Visit GitHub Profile
          </a>
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
  );
}

export default Github;
