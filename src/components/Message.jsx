/* eslint-disable react/prop-types */

function Message({ message }) {
  return (
    <div className="text-lg font-medium max-w-sm text-center">
      <span role="img">👋</span> {message}
    </div>
  );
}

export default Message;
