"use client";
const Button = () => {
  return (
    <button
      className="text-red-600 cursor-pointer"
      onClick={() => {
        alert("hi");
      }}
    >
      click
    </button>
  );
};

export default Button;
