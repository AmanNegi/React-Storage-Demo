// eslint-disable-next-line react/prop-types
function FieldLabel({ name, htmlFor }) {
  return (
    <label className="text-2xl text-purple-700 font-semibold" htmlFor={htmlFor}>
      {name}
    </label>
  );
}

export default FieldLabel;
