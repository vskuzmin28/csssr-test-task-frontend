import React from 'react';

const Avatar = ({ url, caption, className }) => <img className={className} src={url} alt={caption} />;

export default Avatar;
