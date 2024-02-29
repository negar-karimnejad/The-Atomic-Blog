import { useState } from "react";
import { usePosts } from "../context/PostContext";

function Navbar() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { addPost } = usePosts();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    addPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-purple-300 p-4 mb-4 gap-5 flex flex-col sm:flex-row items-center justify-center"
    >
      <input
        className="w-full sm:w-auto px-2 py-1 mb-2 sm:mb-0 border border-gray-300 rounded-lg focus:outline-none"
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        rows="1"
        className="w-full sm:w-auto px-2 py-1 mb-2 sm:mb-0 border border-gray-300 rounded-lg focus:outline-none"
        placeholder="Post body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="px-4 py-1 mb-2 sm:mb-0 bg-purple-500 rounded-lg dark:text-white"
      >
        Add Post
      </button>
    </form>
  );
}

export default Navbar;
