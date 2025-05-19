import React from "react";

function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
            Hi, I'm Priti Kumari
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I’m a motivated Full Stack Developer student, eager to build modern
            web applications and create seamless user experiences. I enjoy
            solving complex problems by turning them into simple, intuitive
            solutions. Passionate about learning and growing my skills, I’m
            excited to contribute to innovative projects and make an impact in
            the tech world.
          </p>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 rounded-full blur-lg opacity-20"></div>
          <img
            src="https://png.pngtree.com/png-clipart/20230527/original/pngtree-cute-girl-cartoon-face-png-image_9171167.png"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
          />
        </div>

        {/* Professional Background */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Professional Journey
          </h2>
          <div className="space-y-6 text-left max-w-4xl mx-auto">
            <p className="text-lg text-gray-600">
              I began exploring web development in 2023, driven by a passion for
              creating dynamic and user-friendly websites. While still building
              my skills, I’ve focused on learning the full web development
              stack—from designing clean, responsive interfaces to understanding
              backend architecture. I’m excited to grow and apply my knowledge
              to real-world projects.
            </p>
            <p className="text-lg text-gray-600">
              I'm currently dedicated to developing modern web applications with
              React, Node.js, and cloud platforms. I enjoy building sleek,
              high-performance solutions that combine great design with robust
              functionality.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-indigo-600 font-semibold mb-4">
              Frontend Development
            </h3>
            <p className="text-lg text-gray-600">
              I'm passionate about crafting beautiful, responsive user
              interfaces using HTML, CSS, and JavaScript, along with modern
              frameworks like React, and Tailwind CSS. I focus on delivering
              seamless user experiences that are both visually appealing and
              highly functional.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-purple-600 font-semibold mb-4">
              Backend Development
            </h3>
            <p className="text-lg text-gray-600">
              Experienced in backend development using Java, C, C++, and Python,
              with a strong foundation in core programming concepts. Currently
              exploring Node.js to expand my skills in modern server-side
              technologies.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-purple-600 font-semibold mb-4">
              Database
            </h3>
            <p className="text-lg text-gray-600">
              Proficient in designing and managing relational databases using
              MySQL and Oracle, with a focus on data consistency, performance,
              and secure data handling.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-teal-600 font-semibold mb-4">
              UI/UX Design
            </h3>
            <p className="text-lg text-gray-600">
              Crafting user experiences that are intuitive and engaging, with a
              strong emphasis on accessibility standards and frontend
              performance optimization.
            </p>
          </div>
        </div>
        {/* Personal Interests */}
        {/* Personal Interests */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Problem Solving Enthusiast
              </h3>
              <p className="text-lg text-gray-600">
                Enjoy solving logical and algorithmic challenges on platforms
                like LeetCode and HackerRank to keep my thinking sharp.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-purple-600 font-semibold">
                Data Analytics & Visualization
              </h3>
              <p className="text-lg text-gray-600">
                Exploring data analysis techniques and visualization tools like
                D3.js and Tableau to turn data into actionable insights.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-teal-600 font-semibold">
                Design Enthusiast
              </h3>
              <p className="text-lg text-gray-600">
                Interested in UI/UX design principles and love experimenting
                with layouts and color schemes in frontend projects.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                API Design & Integration
              </h3>
              <p className="text-lg text-gray-600">
                Actively exploring APIs like OpenAI and GraphQL APIs that
                provide seamless integration and improve developer experience.
              </p>
            </div>
            {/* Add Lifelong Learner here as a new grid item */}
            <div className="space-y-3">
              <h3 className="text-2xl text-yellow-600 font-semibold">
                Lifelong Learner
              </h3>
              <p className="text-lg text-gray-600">
                Passionate about self-improvement through books, online courses,
                and tech blogs—always looking to grow both technically and
                personally.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 p-12 rounded-xl text-white text-center">
          <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I’m open to discussing exciting projects, fresh ideas, or ways I can
            contribute to your goals. Whether it’s teaming up for hackathons or
            developing innovative solutions, I’m eager to bring creativity and
            dedication to the table.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
