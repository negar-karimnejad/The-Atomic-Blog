/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { faker } from "@faker-js/faker";
import { createContext, useContext, useEffect, useState } from "react";

export const PostContext = createContext();

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function PostContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  const clearPosts = () => {
    setPosts([]);
  };

  const addPost = ({ title, body }) => {
    setPosts((prev) => [...prev, { title, body }]);
  };

  useEffect(() => {
    if (search) {
      setPosts(
        posts.filter(
          (post) =>
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.body.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setPosts(() => Array.from({ length: 30 }, () => createRandomPost()));
    }
  }, [search]);

  return (
    <PostContext.Provider
      value={{
        posts,
        search,
        setSearch,
        clearPosts,
        addPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostContext);
  return context;
}

export { PostContextProvider, usePosts };
