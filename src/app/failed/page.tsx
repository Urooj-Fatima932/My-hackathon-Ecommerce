function Failed() {
    return (  
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8 text-center">
          {/* Cross Icon */}
          <div className="mx-auto flex items-center justify-center h-32 w-32 bg-red-100 rounded-full animate-scaleIn">
            <div className="relative w-16 h-16">
              <div className="absolute top-1/2 left-1/2 w-full h-1 bg-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
              <div className="absolute top-1/2 left-1/2 w-full h-1 bg-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
            </div>
          </div>
    
          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">Payment Failed</h1>
            <p className="text-gray-600 text-lg">
              We couldn&apos;t process your payment. Please check your payment details and try again.
            </p>
    
            {/* Actions */}
            <div className="space-y-3">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-6 rounded-xl font-medium transition-all duration-200 transform hover:-translate-y-1">
                Try Again
              </button>
              <button className="w-full bg-gray-900 hover:bg-black text-white py-4 px-6 rounded-xl font-medium transition-all duration-200 transform hover:-translate-y-1">
                Contact Support
              </button>
            </div>
            
            <p className="text-gray-600 text-sm">
              Secure payment processing by{' '}
              <span className="font-medium text-black">Nike Payments</span>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Failed;