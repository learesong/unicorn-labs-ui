import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { User } from '@supabase/supabase-js';
import { LoginPage } from './LoginPage';
import { SignupPage } from './SignupPage';

interface AuthWrapperProps {
  children: (user: User) => React.ReactNode;
}

export function AuthWrapper({ children }: AuthWrapperProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your unicorn journey...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    if (authMode === 'login') {
      return (
        <LoginPage
          onSuccess={() => {
            // User will be set automatically by the auth state change listener
          }}
          onSwitchToSignup={() => setAuthMode('signup')}
        />
      );
    } else {
      return (
        <SignupPage
          onSuccess={() => {
            // User will be set automatically by the auth state change listener
          }}
          onSwitchToLogin={() => setAuthMode('login')}
        />
      );
    }
  }

  return <>{children(user)}</>;
}