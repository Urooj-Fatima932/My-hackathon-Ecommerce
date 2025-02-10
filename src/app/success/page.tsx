import React from "react";

const Success = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8 text-center">
          {/* Checkmark Animation */}
          <div className="mx-auto flex items-center justify-center h-32 w-32 bg-emerald-100 rounded-full">
            <svg
              className="checkmark animate-scaleIn w-16 h-16 text-emerald-600"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M20 6L9 17l-5-5"
                className="animate-draw"
              />
            </svg>
          </div>
    
          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">Order Confirmed!</h1>
            <p className="text-gray-600 text-lg">
              Your Nike order has been successfully placed. A confirmation email is on its way.
            </p>
    
            {/* Order Details Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-left space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-medium">#NIKE235689</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Items:</span>
                <span className="font-medium">Air Jordan 1 Retro High OG</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total:</span>
                <span className="font-medium text-emerald-600">$179.99</span>
              </div>
            </div>
    
            {/* Actions */}
            <button className="w-full bg-black hover:bg-gray-800 text-white py-4 px-6 rounded-xl font-medium transition-all duration-200 transform hover:-translate-y-1">
              Continue Shopping
            </button>
            <p className="text-gray-600">
              Need help?{' '}
              <a href="#" className="text-black font-medium hover:underline">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Success;