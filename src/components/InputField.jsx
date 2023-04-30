import FieldLabel from "./FieldLabel";

// eslint-disable-next-line react/prop-types
function InputField({ name, id, onChange, value = "" }) {
  return (
    <>
      <div className="flex flex-col w-[30%] ">
        <FieldLabel name={name} htmlFor={id} />
        <input
          value={value}
          onChange={(v) => onChange(v)}
          className="bg-purple-300 focus:dark:bg-gray-900 dark:bg-gray-900 bg-opacity-40 block w-full h-[6vh] mt-2  px-5 dark:text-white"
          type="text"
          id={id}
        />
      </div>
    </>
  );
}

export default InputField;
