import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/sidebar';

const AIReportsPage = () => {
  const reportsData = [
    { id: 1, title: 'Sales Forecast Q4', date: '2025-07-15', status: 'Completed', insights: 'High growth predicted' },
    { id: 2, title: 'Customer Retention Analysis', date: '2025-07-10', status: 'In Progress', insights: 'Churn rate stable' },
    { id: 3, title: 'Market Trends', date: '2025-07-05', status: 'Completed', insights: 'Emerging opportunities' },
  ];

  const chartData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 4500 },
    { name: 'May', sales: 6000 },
  ];

  return (
    <div className="flex min-h-screen bg-blue-950 dark:bg-gray-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-6"
        >
          <h2 className="text-2xl font-poppins font-semibold mb-6 text-gray-300 dark:text-text-dark">AI Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-300 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-black dark:text-text-light">Recent Reports</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-text-light dark:text-text-dark">
                      <th className="p-2">Title</th>
                      <th className="p-2">Date</th>
                      <th className="p-2">Status</th>
                      <th className="p-2">Insights</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportsData.map((report) => (
                      <tr key={report.id} className="border-t dark:border-gray-700">
                        <td className="p-2 text-text-light dark:text-text-dark">{report.title}</td>
                        <td className="p-2 text-text-light dark:text-text-dark">{report.date}</td>
                        <td className="p-2">
                          <span className={`px-2 py-1 rounded-full text-sm ${
                            report.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                          }`}>
                            {report.status}
                          </span>
                        </td>
                        <td className="p-2 text-text-light dark:text-text-dark">{report.insights}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-gray-300 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-black dark:text-text-dark">Sales Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#4B0082" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default AIReportsPage;