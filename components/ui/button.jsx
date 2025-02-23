import * as React from "react";

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`px-6 py-2 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
