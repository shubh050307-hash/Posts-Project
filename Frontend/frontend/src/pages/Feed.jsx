import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image:
        "https://images.unsplash.com/photo-1782542549365-545809c39691?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
      caption: "Beautiful Scenery",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <div>
      <section className="feed-section">
        {posts.length > 0 ? (
          posts.map((post) => {
            <div key={post._id} className="post-card">
              <img src={post.image} />
              <p>{post.caption}</p>
            </div>;
          })
        ) : (
          <h3>No posts Available</h3>
        )}
      </section>
    </div>
  );
};

export default Feed;
