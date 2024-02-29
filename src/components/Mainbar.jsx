import { usePosts } from "../context/PostContext";

function Mainbar() {
  const { posts } = usePosts();
  return (
    <main>
      <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts?.map((post, i) => (
          <div
            className="border p-4 bg-white shadow-md cursor-pointer transition-all hover:text-white hover:bg-purple-400"
            key={i}
          >
            <h2 className="font-semibold">{post?.title}</h2>
            <p className="mt-2">{post?.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Mainbar;
