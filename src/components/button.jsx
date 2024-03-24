import React from "react";

const Button = ({ direction: direction }) => {
  return (
    <div className="p-3 border rounded-lg w-24 text-center shadow hover:scale-105 transition">
      {direction}
    </div>
  );
};

export default Button;
