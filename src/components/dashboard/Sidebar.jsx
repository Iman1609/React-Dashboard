import { NavLink } from 'react-router-dom';
import { Layout, BarChart, List, Users, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Layout },
    { name: 'AI Reports', path: '/reports', icon: BarChart },
    { name: 'Tasks', path: '/tasks', icon: List },
    { name: 'Team', path: '/team', icon: Users },
    { name: 'Settings', path: '/settings', icon: Settings },
    { name: 'Logout', path: '/login', icon: LogOut },
  ];

   return (
    <motion.aside
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="w-64 h-screen bg-gray-300 dark:bg-dark-bg p-4"
    >
      <div className="flex items-center mb-8">
        <img
          src={logo}
          alt="IntelliSight Logo"
          className="w-10 h-10 mr-2 object-contain"
          onError={() => console.error('Failed to load logo')}
        />
        <div className="text-2xl font-poppins font-semibold text-blue-950 dark:text-text-dark transition-theme">IntelliSight</div>
      </div>
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center p-2 mb-2 rounded-md text-blue-950 dark:text-text-dark ${
                isActive ? 'bg-primary text-text-dark' : 'hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
              }`
            }
          >
            <item.icon className="mr-2" size={20} />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;