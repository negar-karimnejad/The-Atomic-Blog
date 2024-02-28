/* eslint-disable react/prop-types */

function Message({ message }) {
  return (
    <div className="text-xl font-medium max-w-sm text-center">
      <span role="img">👋</span> {message}
    </div>
  );
}

export default Message;
