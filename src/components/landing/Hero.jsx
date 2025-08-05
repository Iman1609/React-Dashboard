import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 text-center bg-blue-950 dark:bg-dark-bg"
    >
      <h1 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-300 dark:text-text-dark">
        Smarter Insights, Faster Growth
      </h1>
      <p className="mt-4 text-lg text-gray-300 dark:text-text-dark">
        Unlock the power of AI-driven analytics with IntelliSight
      </p>
      <Button onClick={() => navigate('/login')} className="mt-6 text-lime-50 hover:bg-primary-dark transition-theme">
        Start Free Trial
      </Button>
    </motion.section>
  );
};

export default Hero;