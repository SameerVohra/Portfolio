function Contact() {
  return (
    <div className="contact-page bg-gray-900 p-5 text-white font-mono text-xl">
      <div className="flex">
        <div className="line-numbers text-gray-500 pr-4">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="leading-6">{i + 1}</div>
          ))}
        </div>
        <div className="code-block overflow-y-auto max-h-screen">
          <h1 className="text-gray-300 mb-4">1. .socials {"{"}</h1>
          <ul className="social-links space-y-2">
            <li>3. <span className="text-gray-500">email: <a href="mailto:sameervohra943@gmail.com" className="text-gray-400 hover:underline">sameervohra943@gmail.com</a></span></li>
            <li>4. <span className="text-gray-500">github: <a href="https://github.com/SameerVohra" className="text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">SameerVohra</a></span></li>
            <li>5. <span className="text-gray-500">linkedin: <a href="https://www.linkedin.com/in/sameer-vohra" className="text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">sameer-vohra</a></span></li>
            <li>6. <span className="text-gray-500">twitter: <a href="https://twitter.com/__sameervohra__" className="text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">__sameervohra__</a></span></li>
            <li>7. <span className="text-gray-500">leetcode: <a href="https://leetcode.com/u/Sameer_Vohra" className="text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">Sameer_Vohra</a></span></li>
          </ul>
          <h1 className="mt-4 text-gray-300">8. {"}"}</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
