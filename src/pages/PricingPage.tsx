import React from 'react';
import { stripeProducts } from '../stripe-config';
import { CheckoutButton } from '../components/checkout/CheckoutButton';
import { Check, Crown, Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-black">UnicornLabs</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your Path to{' '}
            <span className="text-black underline decoration-4 underline-offset-8">
              Unicorn Success 🦄
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're just starting out or ready to scale, 
            we have the perfect plan to accelerate your journey to $10M+ unicorn status.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stripeProducts.map((product, index) => {
            const isPopular = product.name === 'Unicorn Package';
            
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all hover:shadow-lg ${
                  isPopular
                    ? 'bg-black text-white border-black shadow-lg scale-105'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold border border-gray-200 flex items-center space-x-1">
                      <Crown className="w-4 h-4" />
                      <span>🦄 Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{product.price}</span>
                    <span className={isPopular ? "text-gray-300" : "text-gray-500"}>
                      /{product.interval}
                    </span>
                  </div>
                  <p className={isPopular ? "text-gray-300" : "text-gray-600"}>
                    {product.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className={isPopular ? "text-gray-300" : "text-gray-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <CheckoutButton
                  priceId={product.priceId}
                  mode={product.mode}
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    isPopular
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'border border-gray-300 hover:border-black hover:bg-gray-50'
                  }`}
                >
                  {product.name === 'Unicorn Package' ? 'Go Unicorn 🦄' : 'Start Building'}
                </CheckoutButton>
              </div>
            );
          })}
        </div>

        {/* Features Comparison */}
        <div className="mt-16 bg-white rounded-2xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Why Choose UnicornLabs?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI-Powered Strategy</h4>
              <p className="text-gray-600">
                Get personalized business strategies based on analysis of thousands of successful unicorns
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-gray-600">
                847 unicorns created with $2.8B+ in total funding raised through our platform
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">92% Success Rate</h4>
              <p className="text-gray-600">
                Our founders have a 92% success rate in reaching unicorn status within 18 months
              </p>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="font-semibold text-green-900 mb-2">🦄 Unicorn Guarantee</h4>
            <p className="text-green-800">
              If you don't see significant progress toward unicorn status within 90 days, 
              we'll refund your subscription. That's how confident we are in our platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}