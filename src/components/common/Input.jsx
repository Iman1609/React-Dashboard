const Input = ({ type = 'text', placeholder, value, onChange, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2 rounded-md bg-gray-300 dark:bg-gray-700 text-blue-950 dark:text-text-dark border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
      {...props}
    />
  );
};

export default Input;