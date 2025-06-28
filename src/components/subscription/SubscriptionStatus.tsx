import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { getProductByPriceId } from '../../stripe-config';
import { Crown, Calendar, CreditCard, AlertCircle } from 'lucide-react';

interface SubscriptionData {
  subscription_status: string;
  price_id: string | null;
  current_period_end: number | null;
  cancel_at_period_end: boolean;
  payment_method_brand: string | null;
  payment_method_last4: string | null;
}

export function SubscriptionStatus() {
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSubscription();
  }, []);

  const fetchSubscription = async () => {
    try {
      const { data, error } = await supabase
        .from('stripe_user_subscriptions')
        .select('*')
        .maybeSingle();

      if (error) {
        setError('Failed to fetch subscription data');
        console.error('Subscription fetch error:', error);
        return;
      }

      setSubscription(data);
    } catch (err) {
      setError('An unexpected error occurred');
      console.error('Subscription error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex items-center space-x-3">
        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  if (!subscription || subscription.subscription_status === 'not_started') {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <div className="flex items-center space-x-3">
          <Crown className="w-6 h-6 text-gray-400" />
          <div>
            <h3 className="font-semibold text-gray-900">No Active Subscription</h3>
            <p className="text-gray-600">Upgrade to unlock unicorn features 🦄</p>
          </div>
        </div>
      </div>
    );
  }

  const product = subscription.price_id ? getProductByPriceId(subscription.price_id) : null;
  const isActive = subscription.subscription_status === 'active';
  const isPastDue = subscription.subscription_status === 'past_due';
  const isCanceled = subscription.subscription_status === 'canceled';

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  const getStatusColor = () => {
    if (isActive) return 'text-green-600 bg-green-50 border-green-200';
    if (isPastDue) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    if (isCanceled) return 'text-red-600 bg-red-50 border-red-200';
    return 'text-gray-600 bg-gray-50 border-gray-200';
  };

  const getStatusText = () => {
    switch (subscription.subscription_status) {
      case 'active':
        return subscription.cancel_at_period_end ? 'Active (Canceling)' : 'Active';
      case 'past_due':
        return 'Past Due';
      case 'canceled':
        return 'Canceled';
      case 'trialing':
        return 'Trial';
      default:
        return subscription.subscription_status;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Crown className="w-6 h-6 text-purple-600" />
          <div>
            <h3 className="font-semibold text-gray-900">
              {product?.name || 'Subscription'}
            </h3>
            <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor()}`}>
              {getStatusText()}
            </div>
          </div>
        </div>
        {product && (
          <div className="text-right">
            <div className="text-lg font-bold text-gray-900">{product.price}</div>
            <div className="text-sm text-gray-500">per {product.interval}</div>
          </div>
        )}
      </div>

      {subscription.current_period_end && (
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
          <Calendar className="w-4 h-4" />
          <span>
            {subscription.cancel_at_period_end ? 'Expires' : 'Renews'} on{' '}
            {formatDate(subscription.current_period_end)}
          </span>
        </div>
      )}

      {subscription.payment_method_brand && subscription.payment_method_last4 && (
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <CreditCard className="w-4 h-4" />
          <span>
            {subscription.payment_method_brand.toUpperCase()} ending in {subscription.payment_method_last4}
          </span>
        </div>
      )}

      {subscription.cancel_at_period_end && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            Your subscription will not renew and will end on{' '}
            {subscription.current_period_end && formatDate(subscription.current_period_end)}.
          </p>
        </div>
      )}
    </div>
  );
}