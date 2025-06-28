import React from 'react';
import { supabase } from '../lib/supabase';
import { SubscriptionStatus } from '../components/subscription/SubscriptionStatus';
import { 
  LogOut, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3,
  Crown,
  Rocket,
  Brain,
  DollarSign
} from 'lucide-react';
import { User } from '@supabase/supabase-js';

interface DashboardPageProps {
  user: User;
}

export function DashboardPage({ user }: DashboardPageProps) {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const dashboardCards = [
    {
      title: 'AI Business Strategy',
      description: 'Get personalized strategies for your unicorn journey',
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-purple-100 text-purple-600',
      action: 'Generate Strategy'
    },
    {
      title: 'Market Analysis',
      description: 'Analyze your market and competition',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-blue-100 text-blue-600',
      action: 'Analyze Market'
    },
    {
      title: 'Investor Network',
      description: 'Connect with unicorn investors',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-green-100 text-green-600',
      action: 'Find Investors'
    },
    {
      title: 'Growth Tracking',
      description: 'Monitor your path to $10M+',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-orange-100 text-orange-600',
      action: 'View Progress'
    },
    {
      title: 'Funding Pipeline',
      description: 'Track funding opportunities',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'bg-emerald-100 text-emerald-600',
      action: 'View Pipeline'
    },
    {
      title: 'Unicorn Roadmap',
      description: 'Your personalized path to unicorn status',
      icon: <Target className="w-6 h-6" />,
      color: 'bg-pink-100 text-pink-600',
      action: 'View Roadmap'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-black">UnicornLabs Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, {user.email}</p>
              </div>
            </div>
            
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Subscription Status */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
            <Crown className="w-6 h-6 text-purple-600" />
            <span>Your Unicorn Status</span>
          </h2>
          <SubscriptionStatus />
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Unicorn Score</p>
                <p className="text-2xl font-bold text-gray-900">8.7/10</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Market Potential</p>
                <p className="text-2xl font-bold text-gray-900">$2.4B</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Investor Matches</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Time to $10M</p>
                <p className="text-2xl font-bold text-gray-900">18mo</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Unicorn Tools & Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${card.color}`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <button className="text-black font-semibold hover:underline group-hover:translate-x-1 transition-transform">
                  {card.action} →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">AI generated your personalized unicorn strategy</span>
              <span className="text-sm text-gray-500 ml-auto">2 hours ago</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700">New investor match: TechVentures Capital</span>
              <span className="text-sm text-gray-500 ml-auto">1 day ago</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-gray-700">Market analysis completed for your sector</span>
              <span className="text-sm text-gray-500 ml-auto">2 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}