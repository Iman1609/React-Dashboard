import { motion } from 'framer-motion';

const DashboardCard = ({ title, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-300 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-theme"
    >
      <h3 className="text-lg font-poppins font-bold text-black dark:text-text-dark transition-theme">{title}</h3>
      <p className="mt-2 text-blue-950 dark:text-text-dark transition-theme">{content}</p>
    </motion.div>
  );
};

export default DashboardCard;