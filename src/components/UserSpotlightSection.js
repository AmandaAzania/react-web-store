// src/components/UserSpotlightSection.js
import React, { useState } from 'react';
import UserSpotlightCard from './UserSpotlightCard';
import './UserSpotlightSection.css';

const UserSpotlightSection = () => {
  const [posts] = useState([
    { id: 1, username: 'KailaKake', image: 'https://i.postimg.cc/bwsNMW4t/images-13.jpg', caption: 'Glow-up season is here! Obsessed with these skin-nourishing must-haves from GLOO. ✨ #GlowWithGLOO' },
    { id: 2, username: 'LisaOnuoha', image: 'https://i.postimg.cc/66CFzc3f/images-14.jpg', caption: 'Say hello to hydrated, radiant skin! My new GLOO essentials are everything. 💧🧴 #SkincareGoals' },
    { id: 3, username: 'AmandaNjingela', image: 'https://i.postimg.cc/brTR2sR4/images-15.jpg', caption: 'Skin so smooth, I can’t stop smiling! GLOO, you’re a game-changer. 🌿💖 #GLOOLovesMe' },
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
