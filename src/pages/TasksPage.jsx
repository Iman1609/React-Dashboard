import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle } from 'lucide-react';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/sidebar';
import Button from '../components/common/Button';

const TasksPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Analyze Q4 Data', assignedTo: 'John Doe', dueDate: '2025-07-20', completed: false },
    { id: 2, title: 'Update AI Model', assignedTo: 'Jane Smith', dueDate: '2025-07-22', completed: true },
    { id: 3, title: 'Client Meeting', assignedTo: 'Team', dueDate: '2025-07-25', completed: false },
  ]);

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

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
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-poppins font-semibold text-gray-300 dark:text-text-dark">Tasks</h2>
            <Button className=" text-gray-300">Add Task</Button>
          </div>
          <div className="bg-gray-300 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-poppins font-semibold mb-4 text-text-light dark:text-text-dark">Task List</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-text-light dark:text-text-dark">
                    <th className="p-2">Status</th>
                    <th className="p-2">Title</th>
                    <th className="p-2">Assigned To</th>
                    <th className="p-2">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr key={task.id} className="border-t dark:border-gray-700">
                      <td className="p-2">
                        <button onClick={() => toggleTaskCompletion(task.id)}>
                          {task.completed ? (
                            <CheckCircle className="text-green-500" size={20} />
                          ) : (
                            <Circle className="text-gray-500" size={20} />
                          )}
                        </button>
                      </td>
                      <td className="p-2 text-text-light dark:text-text-dark">{task.title}</td>
                      <td className="p-2 text-text-light dark:text-text-dark">{task.assignedTo}</td>
                      <td className="p-2 text-text-light dark:text-text-dark">{task.dueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default TasksPage;