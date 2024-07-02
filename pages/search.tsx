// pages/search.tsx

// Create a search page to display search results.
// This page will show services based on search criteria.
import React, { useState } from 'react';
import axios from 'axios';

const SearchPage: React.FC = () => {
  const [services, setServices] = useState<{ id: string; name: string }[]>([]);
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(`/api/services/search?query=${query}`);
      setServices(data);
    } catch (error) {
      console.error('Error searching services:', error);
    }
  };

  return (
    <div>
      <h1>Search Services</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by location, category, or rating"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {services.map((service) => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
// This page allows users to search for services based on a query string.
// The search results are displayed in a list format.
// The page uses React hooks to manage state and perform the search operation.
// The search query is sent to the server using an HTTP GET request.
// The search results are displayed in a list format using the map function.
// The page is exported as a default component to be used in the application.
// The page can be accessed at the /search route.
