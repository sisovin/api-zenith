import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to API Zenith</h1>
      <p className="text-lg">
        This is the homepage of the API Zenith project, built with Next.js 15 and Tailwind CSS.
      </p>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">API Features</h2>
        <ul className="list-disc list-inside">
          <li className="mb-1">User management with secure authentication</li>
          <li className="mb-1">Product management with inventory tracking</li>
          <li className="mb-1">Real-time updates with WebSockets</li>
          <li className="mb-1">Comprehensive API documentation</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
