const Button = ({ children, onClick, className, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 font-semibold rounded-lg focus:outline-none transition-all bg-blue-500 hover:bg-blue-600 text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button