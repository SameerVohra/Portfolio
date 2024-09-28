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

interface Repo {
  id: number;
  name: string;
  html_url: string;
  language: string;
  created_at: string;
  updated_at: string;
}

function Github() {
  const [gitData, setGitData] = useState<Git | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    // Fetch GitHub profile data
    axios.get('https://api.github.com/users/SameerVohra')
      .then(res => setGitData(res.data))
      
    // Fetch GitHub repositories
    axios.get('https://api.github.com/users/SameerVohra/repos')
      .then(res => setRepos(res.data))
        }, []);

  // Helper function to format date strings
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 border border-gray-300 shadow-lg w-full mx-auto m-0 font-mono">
      <h1 className="text-gray-800 text-2xl font-semibold mb-6">GitHub Profile</h1>

      {gitData ? (
        <div className="flex flex-col items-center bg-white p-6 rounded-lg border border-gray-300 w-full max-w-2xl mb-8">
          <img
            src={gitData.avatar_url}
            alt={`${gitData.login}'s avatar`}
            className="w-28 h-28 rounded-full border mb-4"
          />
          <h2 className="text-xl text-blue-600 font-semibold mb-4">{gitData.login}</h2>
          <div className="text-gray-800 w-full">
            <p className="flex justify-between mb-2">
              <span className="font-semibold">Followers:</span>
              <span className="text-blue-600">{gitData.followers}</span>
            </p>
            <p className="flex justify-between mb-2">
              <span className="font-semibold">Following:</span>
              <span className="text-blue-600">{gitData.following}</span>
            </p>
            <p className="flex justify-between mb-2">
              <span className="font-semibold">Public Repositories:</span>
              <span className="text-blue-600">{gitData.public_repos}</span>
            </p>
          </div>
          <a
            href={gitData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300 w-full text-center"
          >
            Visit GitHub Profile
          </a>
        </div>
      ) : (
        <p className="text-gray-600 mb-8">Loading profile...</p>
      )}

      <h2 className="text-gray-800 text-xl font-semibold mb-6">Repositories</h2>

      {repos.length > 0 ? (
        <div className="w-full bg-white p-6 rounded-lg border border-gray-300 max-w-2xl">
          <ul className="list-disc pl-5">
            {repos.map(repo => (
              <li key={repo.id} className="mb-4">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  <span className="font-bold">{repo.name}</span>
                </a>
                {repo.language && (
                  <span className="text-gray-700"> - {repo.language}</span>
                )}
                <div className="text-gray-600 text-sm">
                  <p>Created: {formatDate(repo.created_at)}</p>
                  <p>Updated: {formatDate(repo.updated_at)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-600">Loading repositories...</p>
      )}
    </div>
  );
}

export default Github;
