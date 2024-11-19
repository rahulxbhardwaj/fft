import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/videoPlayer.scss';

const Study = () => {
  const { isAuthenticated } = useAuth0();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    fetch('https://89b7b494-fe95-47e9-93a0-bb8eef3b8891-00-10p0b4r9tq3b3.janeway.replit.dev:8080/api/videos') // Replace with your actual server URL
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched videos:', data); // Log fetched videos for debugging
        setVideos(data);
      })
      .catch(error => {
        console.error('Error fetching video list:', error);
        setError('Failed to fetch videos');
      });
  };

  const handleVideoClick = (videoUrl) => {
    console.log('Selected video URL:', videoUrl); // Log the selected video URL
    setSelectedVideo(videoUrl); // Set the selected video URL
  };

  if (!isAuthenticated) {
    return <div>Please log in to view the video.</div>;
  }

  return (
    <div className="video-player-wrapper">
      <h1>Study Videos</h1>

      {error && <div>Error: {error}</div>}

      {!selectedVideo && (
        <div className="video-selection">
          {videos.map((video, index) => (
            <button key={index} onClick={() => handleVideoClick(`https://89b7b494-fe95-47e9-93a0-bb8eef3b8891-00-10p0b4r9tq3b3.janeway.replit.dev:8080/${video.url}`)}>
              {video.name}
            </button>
          ))}
        </div>
      )}

      {selectedVideo && (
        <div className="video-player-container">
          <video className="video-player" controls>
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default Study;
