import { usePosts } from "../context/PostContext";

function Header() {
  const { clearPosts, setSearch, search } = usePosts();

  const changeHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <header className="font-medium flex flex-col sm:flex-row items-center justify-between mb-4">
      <h1 className="flex-1 text-3xl font-bold">⚛ The Atomic Blog</h1>
      <p className="flex-1 mb-2 sm:mb-0">🚀 atomic posts found</p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex-1 flex items-center justify-center gap-2 w-full"
      >
        <input
          className="max-md:w-full sm:w-auto px-2 py-1 border border-gray-300 rounded-lg focus:outline-none sm:mb-0"
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={changeHandler}
        />
        <button
          type="button"
          onClick={clearPosts}
          className="sm:flex-1 shrink-0 px-4 py-1 bg-purple-500 rounded-lg dark:text-white"
        >
          Clear Posts
        </button>
      </form>
    </header>
  );
}

export default Header;
