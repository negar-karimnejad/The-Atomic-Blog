/* eslint-disable react/prop-types */
function Post({ post }) {
  const { title, body } = post;

  return (
    <div className="border p-4 bg-white shadow-md cursor-pointer transition-all hover:text-white hover:bg-purple-400">
      <h2 className="font-semibold">{title}</h2>
      <p className="mt-2">{body}</p>
    </div>
  );
}

export default Post;
