"use client";

export const FreeToolsHeader = ({ title, description }) => {
  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
        Free <span className="text-indigo-500">{title}</span> QR Code{" "}
        <span className="text-indigo-500">Generator</span>
      </h1>

      <p className="mb-8 text-sm sm:text-base text-gray-300 text-center">
        {description}
        
      </p>
    </>
  );
};
