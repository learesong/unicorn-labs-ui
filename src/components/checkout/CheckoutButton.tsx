import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { ArrowRight, Loader2 } from 'lucide-react';

interface CheckoutButtonProps {
  priceId: string;
  mode: 'payment' | 'subscription';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function CheckoutButton({ 
  priceId, 
  mode, 
  children, 
  className = '', 
  disabled = false 
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (disabled || loading) return;

    setLoading(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        throw new Error('Please sign in to continue');
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price_id: priceId,
          mode,
          success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/pricing`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert(error instanceof Error ? error.message : 'Failed to start checkout');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={disabled || loading}
      className={`${className} disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2`}
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          <span>{children}</span>
          <ArrowRight className="w-5 h-5" />
        </>
      )}
    </button>
  );
}