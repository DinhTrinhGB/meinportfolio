import { useState } from 'react';

export default function PostBoard() {
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setPosts([...posts, message]);
      setMessage('');
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
