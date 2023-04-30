// eslint-disable-next-line react/prop-types
function MyButton({ name, onClick, additionalClass = "" }) {
  return (
    <button
      className={`text-lg bg-purple-600 px-8 py-2  h-12 text-white font-semibold rounded-md ${additionalClass}`}
      type="submit"
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
}

export default MyButton;
