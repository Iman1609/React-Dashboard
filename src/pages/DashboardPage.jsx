import { motion } from 'framer-motion';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/sidebar';
import KpiCard from '../components/dashboard/KPICard';
import DashboardCard from '../components/dashboard/DashboardCard';
import ActivityFeed from '../components/dashboard/ActivityFeed';
import Charts from '../components/dashboard/Charts';

const DashboardPage = () => {
  const kpis = [
    { title: 'Revenue', value: '$50K' },
    { title: 'Users', value: '1.2K' },
    { title: 'Growth', value: '15%' },
  ];
  const activities = ['User signed up', 'Report generated', 'Task completed'];
  const chartData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 6000 },
  ];

  return (
    <div className="flex min-h-screen bg-blue-950 dark:bg-dark-bg transition-theme">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-6"
        >
          <h2 className="text-2xl font-poppins font-bold text-gray-300 dark:text-text-dark mb-6 transition-theme">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {kpis.map((kpi, index) => (
              <KpiCard key={index} title={kpi.title} value={kpi.value} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <DashboardCard title="Summary" content="Overview of recent activities and metrics." />
            <Charts data={chartData} />
          </div>
          <ActivityFeed activities={activities} />
        </motion.main>
      </div>
    </div>
  );
};

export default DashboardPage;