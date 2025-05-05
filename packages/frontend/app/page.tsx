import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CodeSample from '../components/CodeSample';
import FeatureGrid from '../components/FeatureGrid';
import ApiVersionSwitcher from '../components/ApiVersionSwitcher';

const HomePage = () => {
  const codeExample = `
    import React from 'react';
    import Button from '../components/Button';
    import Card from '../components/Card';
    import CodeSample from '../components/CodeSample';
    import FeatureGrid from '../components/FeatureGrid';

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
  `;

  const features = [
    { title: 'User Management', description: 'Secure authentication and user management.' },
    { title: 'Product Management', description: 'Inventory tracking and product management.' },
    { title: 'Real-time Updates', description: 'Real-time updates with WebSockets.' },
    { title: 'API Documentation', description: 'Comprehensive API documentation.' },
  ];

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
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Components</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Button Component</h3>
          <Button variant="primary" onClick={() => alert('Primary Button Clicked')}>Primary Button</Button>
          <Button variant="secondary" onClick={() => alert('Secondary Button Clicked')} className="ml-2">Secondary Button</Button>
          <Button variant="destructive" onClick={() => alert('Destructive Button Clicked')} className="ml-2">Destructive Button</Button>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Card Component</h3>
          <Card header="Card Header" footer="Card Footer">
            This is the content of the card.
          </Card>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">CodeSample Component</h3>
          <CodeSample code={codeExample} language="javascript" />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">FeatureGrid Component</h3>
          <FeatureGrid features={features} />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">API Version Switcher</h3>
          <ApiVersionSwitcher />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
