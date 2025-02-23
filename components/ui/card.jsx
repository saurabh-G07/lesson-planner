import * as React from "react";

const Card = ({ className, children, ...props }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => (
  <div className="border-b pb-2 mb-4 text-lg font-semibold">{children}</div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-xl font-bold">{children}</h2>
);

const CardContent = ({ children }) => <div className="mt-4">{children}</div>;

export { Card, CardHeader, CardTitle, CardContent };
