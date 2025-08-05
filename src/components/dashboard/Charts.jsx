import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const Charts = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-300 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-theme"
    >
      <h3 className="text-lg font-poppins font-semibold text-black dark:text-text-dark mb-4 transition-theme">Analytics</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#6B46C1" /> {/* Primary color */}
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default Charts;