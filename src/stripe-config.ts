export interface StripeProduct {
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
  price: string;
  currency: string;
  interval?: string;
  features: string[];
}

export const stripeProducts: StripeProduct[] = [
  {
    priceId: 'price_1Rf8IzCi1BLK1vYjacu58Zeg',
    name: 'Founder Package',
    description: 'For serious entrepreneurs ready to launch their unicorn startup',
    mode: 'subscription',
    price: '£29.00',
    currency: 'GBP',
    interval: 'month',
    features: [
      'Advanced AI strategy development',
      'Unlimited business plan generations',
      'Team building network',
      'Priority support',
      'Market validation tools',
      'Investor pitch templates'
    ]
  },
  {
    priceId: 'price_1Rf8JCCi1BLK1vYjTJf8AnAe',
    name: 'Unicorn Package',
    description: 'For scaling to $10M+ unicorn businesses',
    mode: 'subscription',
    price: '£89.00',
    currency: 'GBP',
    interval: 'month',
    features: [
      'Everything in Founder Package',
      'Dedicated success manager',
      'Custom AI model training',
      'Direct investor introductions',
      'Board advisory access',
      'White-glove onboarding',
      'Investor matching platform',
      'Unicorn growth analytics'
    ]
  }
];

export function getProductByPriceId(priceId: string): StripeProduct | undefined {
  return stripeProducts.find(product => product.priceId === priceId);
}