import { motion } from 'framer-motion';
import { Brain, BarChart, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    { title: 'AI Analytics', icon: Brain, description: 'Leverage AI for deep business insights' },
    { title: 'Automation', icon: BarChart, description: 'Automate repetitive tasks effortlessly' },
    { title: 'Real-Time Data', icon: Clock, description: 'Get instant updates on your metrics' },
  ];

  return (
    <section className="py-16 px-4 bg-blue-950">
      <h2 className="text-3xl font-poppins font-semibold text-center mb-8 text-gray-300 dark:text-text-dark">
        Core Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-gray-300 dark:bg-dark-bg rounded-lg shadow-md"
          >
            <feature.icon className="text-blue-950 mb-4" size={32} />
            <h3 className="text-xl text-black font-poppins font-semibold">{feature.title}</h3>
            <p className="text-blue-950 dark:text-text-dark">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;