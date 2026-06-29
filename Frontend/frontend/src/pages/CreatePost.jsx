import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios.post("https://localhost:3000/create-post", formData).then((res) => {
      alert("post created successfully");
      console.log(res);
      navigate("/feed");
    });
  };

  return (
    <section className="create-post-section">
      <h1>Create Post</h1>

      <form
        onSubmit={(e) => {
          handleForm(e);
        }}
      >
        <input type="file" name="image" accept="image/*" />
        <input
          type="text"
          name="caption"
          placeholder="Enter caption"
          required
        />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default CreatePost;
