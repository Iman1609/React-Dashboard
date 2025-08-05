import { Search, Bell } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import { motion } from 'framer-motion';
import userAvatar from '../../assets/user-avatar.png';

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between p-4 bg-gray-300 dark:bg-dark-bg shadow-md transition-theme"
    >
      <div className="flex items-center">
        <Search className="mr-2 text-black font-extrabold dark:text-text-dark" size={20} />
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-md bg-gray-400 dark:bg-gray-700 text-text-light dark:text-text-dark transition-theme"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="text-black dark:text-text-dark" size={20} />
        <ThemeToggle />
        <img
          src={userAvatar}
          alt="User Avatar"
          className="w-12 h-12 rounded-full object-cover"
          onError={() => console.error('Failed to load user avatar')}
        />
      </div>
    </motion.header>
  );
};

export default Navbar;