import React from "react";

function ThankYou() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-900">
          Thank you for your purchase!
        </h2>
        <p className="text-sm text-gray-600">
          We appreciate your business and hope you enjoy your purchase.
        </p>
      </div>
    </div>
  );
}

export default ThankYou;
