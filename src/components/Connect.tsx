import axios from "axios";
import { useEffect, useState } from "react";
import LinkedinLogo from "../assets/LinkedIn.png";
import XLogo from "../assets/logo-white.png";
import GmailLogo from "../assets/gmail.png";
import LeetcodeLogo from "../assets/leetcode.png"

interface GitHubData {
  login: string;
  public_repos: number;
  followers: number;
  following: number;
}
export const Connect = () => {
  const [gitData, setGitData] = useState<GitHubData | null>(null);

  useEffect(() => {
    const github = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/SameerVohra",
        );
        setGitData(response.data);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };
    github();
  }, []);

  return (
    <div className="text-white p-6 rounded-lg shadow-md mt-2 md:mt-10 flex flex-col md:flex-row items-center gap-10 justify-center">
      <div className="p-6 bg-bluish-dark-gradient rounded-3xl w-full md:w-1/2 lg:w-1/3 text-center md:text-left shadow-gray-700 shadow-xl">
        <h2 className="text-4xl font-bold mb-4">GitHub</h2>
        <p className="text-2xl mb-6">
          <strong>Username:</strong> {gitData?.login}
          <br />
          <strong>Repositories:</strong> {gitData?.public_repos}
          <br />
          <strong>Followers:</strong> {gitData?.followers}
          <br />
          <strong>Following:</strong> {gitData?.following}
        </p>
        <a
          href="https://github.com/SameerVohra"
          className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-xl text-xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Profile
        </a>
      </div>

      {/* Social Media Links */}
      <div className="flex gap-6 items-center justify-center flex-wrap flex-col">
        <a
          href="https://www.linkedin.com/in/sameer-vohra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedinLogo} alt="LinkedIn logo" className="h-10 w-auto" />
        </a>
        <a
          href="https://x.com/__sameervohra__"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={XLogo} alt="X logo" className="h-8 w-auto" />
        </a>
        <a href="mailto:sameervohra943@gmail.com">
          <img src={GmailLogo} alt="Gmail logo" className="h-10 w-auto" />
        </a>
        <a
          href="https://leetcode.com/u/Sameer_Vohra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LeetcodeLogo} alt="Leetcode logo" className="h-10 w-auto" />
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=1ffIG7UJnrrNqJ1aUHdQ9kVw0K6AqYqGk"
          download
          className="bg-gray-600 hover:bg-cyan-500 text-white py-2 px-4 rounded-xl text-xl"
        >
          Download Resume
        </a>
       
      </div>
    </div>
  );
};
