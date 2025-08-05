import Sidebar from '../components/dashboard/sidebar';
import Navbar from '../components/dashboard/Navbar';
import Button from '../components/common/Button';
import { motion } from 'framer-motion';

const SettingsPage = () => {
  return (
    <div className="flex h-screen bg-blue-950">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-4 overflow-y-auto">
          <h2 className="text-2xl text-gray-300 font-poppins font-bold mb-4">Settings</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="p-4 bg-gray-300 dark:bg-dark-bg rounded-lg shadow-md">
              <h3 className="text-lg font-poppins font-semibold mb-4">Profile Information</h3>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 mb-2 rounded-md bg-gray-300 dark:bg-gray-700"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-2 rounded-md bg-gray-100 dark:bg-gray-700"
              />
              <Button>Save Changes</Button>
            </div>
            <div className="p-4 bg-gray-300 dark:bg-dark-bg rounded-lg shadow-md">
              <h3 className="text-lg font-poppins font-semibold mb-4">API Key Management</h3>
              <p className="mb-2">Current Key: xxxxx-xxxxx-xxxxx</p>
              <Button>Generate New Key</Button>
              <Button variant="secondary" className="ml-2">Revoke Key</Button>
            </div>
            <div className="p-4 bg-gray-300 dark:bg-dark-bg rounded-lg shadow-md">
              <h3 className="text-lg font-poppins font-semibold mb-4">Billing Info</h3>
              <p>Plan: Pro</p>
              <p>Next Billing: 2025-08-01</p>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;