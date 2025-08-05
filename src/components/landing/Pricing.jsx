import { motion } from 'framer-motion';
import Button from '../common/Button';

const Pricing = () => {
  const pricingPlans = [
    { name: 'Basic', price: '$9/mo', features: ['Basic Analytics', '1 User', 'Email Support'] },
    { name: 'Pro', price: '$29/mo', features: ['Advanced Analytics', '5 Users', 'Priority Support'] },
    { name: 'Enterprise', price: 'Contact Us', features: ['Custom Analytics', 'Unlimited Users', '24/7 Support'] },
  ];

  return (
    <section className="py-16 px-4 bg-blue-950 dark:bg-gray-700">
      <h2 className="text-3xl font-poppins font-semibold text-center mb-8 text-gray-300 dark:text-text-dark">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-gray-300 dark:bg-dark-bg rounded-lg shadow-md"
          >
            <h3 className="text-xl font-poppins font-semibold">{plan.name}</h3>
            <p className="text-2xl font-poppins my-4">{plan.price}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature} className="text-blue-950 dark:text-text-dark mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant={plan.name === 'Enterprise' ? 'secondary' : 'primary'} className="mt-4">
              Choose Plan
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;