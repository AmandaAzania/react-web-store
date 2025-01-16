// src/components/UserSpotlightSection.js
import React, { useState } from 'react';
import UserSpotlightCard from './UserSpotlightCard';
import './UserSpotlightSection.css';

const UserSpotlightSection = () => {
  const [posts] = useState([
    { id: 1, username: 'johndoe', image: 'https://via.placeholder.com/300', caption: 'Loving my new LeLive shirt! #LeLiveStyle' },
    { id: 2, username: 'janedoe', image: 'https://via.placeholder.com/300', caption: 'Can’t wait to show off my new LeLive hoodie! #LeLiveStyle' },
    { id: 3, username: 'alexsmith', image: 'https://via.placeholder.com/300', caption: 'Feeling great in my LeLive gear. Thank you! #LeLiveStyle' },
    // Add more posts as necessary
  ]);

  return (
    <div className="user-spotlight-section">
      <h2>User Spotlights</h2>
      <div className="user-spotlight-list">
        {posts.map(post => (
          <UserSpotlightCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default UserSpotlightSection;
