import { usePosts } from "../context/PostContext";
import Post from "./Post";

function Mainbar() {
  const { posts } = usePosts();
  return (
    <main>
      <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts?.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>
    </main>
  );
}

export default Mainbar;
