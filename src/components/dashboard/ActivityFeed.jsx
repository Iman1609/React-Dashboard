import { motion } from 'framer-motion';

const ActivityFeed = ({ activities }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-300 dark:bg-gray-800 p-4 rounded-lg shadow-md transition-theme"
    >
      <h3 className="text-lg font-poppins font-semibold text-shadow-black dark:text-text-dark mb-4 transition-theme">Activity Feed</h3>
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <li key={index} className="text-blue-950 dark:text-text-dark transition-theme">{activity}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ActivityFeed;