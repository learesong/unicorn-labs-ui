import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Crown, Sparkles } from 'lucide-react';

export function SuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief loading period to show the success animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your unicorn upgrade...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome to the Unicorn Club! 🦄
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Your payment was successful and your subscription is now active. 
            You're ready to build your billion-dollar business!
          </p>

          {/* Session ID (for debugging) */}
          {sessionId && (
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-500">
                Session ID: <span className="font-mono">{sessionId}</span>
              </p>
            </div>
          )}

          {/* Features Highlight */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Strategy</h3>
              <p className="text-sm text-gray-600">Personalized business strategies powered by AI</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Crown className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Unicorn Network</h3>
              <p className="text-sm text-gray-600">Connect with successful founders and investors</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast Growth</h3>
              <p className="text-sm text-gray-600">Accelerated path to $10M+ valuation</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all flex items-center justify-center space-x-2"
            >
              <span>Go to Dashboard</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/"
              className="border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-black hover:bg-gray-50 transition-all"
            >
              Back to Home
            </Link>
          </div>

          {/* Support Note */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              Need help getting started? Our unicorn success team is here to help! 
              Contact us at <a href="mailto:support@unicornlabs.com" className="font-semibold underline">support@unicornlabs.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}