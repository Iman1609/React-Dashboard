import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, TechCorp',
      quote: 'IntelliSight transformed our analytics workflow with its powerful AI insights.',
    },
    {
      name: 'Jane Smith',
      role: 'Marketing Lead, GrowEasy',
      quote: 'The real-time data and automation features are a game-changer for our team.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-blue-950 dark:bg-gray-700">
      <h2 className="text-3xl font-poppins font-semibold text-center mb-8 text-gray-300 dark:text-text-dark">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-gray-300 dark:bg-dark-bg rounded-lg shadow-md"
          >
            <p className="text-blue-950 dark:text-text-dark mb-4">"{testimonial.quote}"</p>
            <p className="font-poppins font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;