import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

const apiVersionSchema = z.object({
  versions: z.array(z.string()),
});

const fetchApiVersions = async () => {
  const response = await fetch('/meta');
  if (!response.ok) {
    throw new Error('Failed to fetch API versions');
  }
  const data = await response.json();
  return apiVersionSchema.parse(data);
};

const ApiVersionSwitcher: React.FC = () => {
  const [selectedVersion, setSelectedVersion] = useState<string | null>(localStorage.getItem('apiVersion'));

  const { data, error, isLoading } = useQuery(['apiVersions'], fetchApiVersions);

  useEffect(() => {
    if (selectedVersion) {
      localStorage.setItem('apiVersion', selectedVersion);
    }
  }, [selectedVersion]);

  const handleVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVersion(event.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading API versions</div>;
  }

  return (
    <div>
      <label htmlFor="api-version">API Version:</label>
      <select id="api-version" value={selectedVersion || ''} onChange={handleVersionChange}>
        {data?.versions.map((version) => (
          <option key={version} value={version}>
            {version}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ApiVersionSwitcher;
