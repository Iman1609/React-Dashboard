import { motion } from 'framer-motion';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/sidebar';

const TeamPage = () => {
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Data Scientist', email: 'john@intellisight.ai', avatar: './src/assets/user-avatar.png' },
    { id: 2, name: 'Jane Smith', role: 'Product Manager', email: 'jane@intellisight.ai', avatar: './src/assets/user-avatar.png' },
    { id: 3, name: 'Alex Brown', role: 'Developer', email: 'alex@intellisight.ai', avatar: './src/assets/user-avatar.png' },
  ];

  return (
    <div className="flex min-h-screen bg-blue-950 dark:bg-dark-bg">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-6"
        >
          <h2 className="text-2xl font-poppins font-semibold mb-6 text-gray-300 dark:text-text-dark">Team Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-300 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-poppins font-semibold text-center text-text-light dark:text-text-dark">{member.name}</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">{member.role}</p>
                <p className="text-center text-text-light dark:text-text-dark">{member.email}</p>
              </div>
            ))}
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default TeamPage;