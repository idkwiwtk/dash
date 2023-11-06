const TextInput = ({ id, name, type }) => {
  return (
    <input
      className="w-11/12 px-2 py-1"
      id={id}
      type={type}
      name={name}
    />
  );
};

export default TextInput;
