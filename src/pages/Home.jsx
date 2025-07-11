import React from "react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to SuperGen3D</h1>
        <p className="text-xl mb-8">Revolutionizing 3D experiences for the next generation of startups.</p>
        <a href="#contact" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition">Contact Us</a>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-700">SuperGen3D is dedicated to bringing interactive 3D technology to your business. Our platform empowers you to create, visualize, and share 3D content effortlessly.</p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Interactive 3D</h3>
              <p>Engage your users with real-time, interactive 3D content.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p>Seamlessly add 3D experiences to your website or app.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p>Tailor the 3D experience to fit your brand and needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form className="flex flex-col gap-4">
          <input className="p-3 rounded border" type="text" placeholder="Your Name" required />
          <input className="p-3 rounded border" type="email" placeholder="Your Email" required />
          <textarea className="p-3 rounded border" placeholder="Your Message" rows="4" required></textarea>
          <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition" type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
} 