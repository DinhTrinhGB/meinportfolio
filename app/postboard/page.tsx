'use client';
import { useState, useEffect } from 'react';
import { db } from '../lib/firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default function PostBoard() {
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState<string[]>([]);

  // Fetch posts from Firestore
  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      setPosts(querySnapshot.docs.map(doc => doc.data().message));
    };
    fetchPosts();
  }, []);
  // 
  // Store new post in Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await addDoc(collection(db, 'posts'), { message });
      setMessage('');
      setPosts(posts => [...posts, message]); // Update local state
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

