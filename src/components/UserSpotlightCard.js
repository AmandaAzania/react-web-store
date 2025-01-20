
import React from 'react';
import './UserSpotlightCard.css';

const UserSpotlightCard = ({ post }) => {
  return (
    <div className="user-spotlight-card">
      <img src={post.image} alt={post.username} className="user-spotlight-image" />
      <div className="user-spotlight-info">
        <h4 className="user-spotlight-username">@{post.username}</h4>
        <p className="user-spotlight-caption">{post.caption}</p>
      </div>
    </div>
  );
};

export default UserSpotlightCard;
