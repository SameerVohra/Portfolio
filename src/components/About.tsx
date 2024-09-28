function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4 md:p-8 font-mono">
      <div className="bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg w-full max-w-md md:max-w-2xl">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">About Me</h1>
        <p className="text-base md:text-lg mb-3 md:mb-4 leading-relaxed text-gray-300">
          I am Sameer Vohra, a final-year Computer Science student at Chitkara University with a GPA of 9.32/10. My passion lies in full-stack development, particularly with the MERN stack and TypeScript, complemented by my proficiency in Tailwind CSS for creating responsive and aesthetically pleasing web applications.
        </p>
        <p className="text-base md:text-lg mb-3 md:mb-4 leading-relaxed text-gray-300">
          I have a strong foundation in data structures and algorithms (DSA), which enhances my problem-solving abilities and has led me to develop various projects, including a sorting visualizer and a process scheduling algorithms visualizer.
        </p>
        <p className="text-base md:text-lg mb-3 md:mb-4 leading-relaxed text-gray-300">
          Outside of my technical pursuits, I enjoy playing badminton and cooking, which help me maintain a balanced lifestyle. I’m excited to connect and collaborate on innovative projects!
        </p>
      </div>
    </div>
  );
}

export default About;
