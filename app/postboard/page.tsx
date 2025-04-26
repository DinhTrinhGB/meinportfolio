'use client';
import { useState } from 'react';

export default function PostBoard() {
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState<string[]>([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      try {
        const response = await fetch('/api/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message }),
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Post saved:', result);
          setMessage(''); // Clear the input
          setPosts(posts => [...posts, message]); // Add to local state
        } else {
          const error = await response.json();
          console.error('Error saving post:', error);
        }
      } catch (err) {
        console.error('Network error:', err);
      }
    }
  };

  return (
    <div>
      <h2>Postboard</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write something..."
        />
        <button type="submit">Post</button>
      </form>
      <div>
        {posts.map((post, index) => (
          <p key={index}>{post}</p>
        ))}
      </div>
    </div>
  );
}

