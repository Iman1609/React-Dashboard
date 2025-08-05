import { motion } from 'framer-motion';

const KpiCard = ({ title, value }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-theme"
    >
      <h3 className="text-sm font-poppins text-text-light dark:text-text-dark transition-theme">{title}</h3>
      <p className="text-2xl font-semibold text-text-light dark:text-text-dark transition-theme">{value}</p>
    </motion.div>
  );
};

export default KpiCard;