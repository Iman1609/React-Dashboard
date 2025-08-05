import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { motion } from 'framer-motion';
import { AuthContext } from '../context/AuthContext';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Individual');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Optionally, save name and role to user profile (e.g., Firestore) later
      navigate('/dashboard');
    } catch (err) {
      console.error('Signup Error:', err.code, err.message);
      setError(getFirebaseErrorMessage(err.code));
    }
  };

  const getFirebaseErrorMessage = (code) => {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Email already in use';
      case 'auth/invalid-email':
        return 'Invalid email address';
      case 'auth/weak-password':
        return 'Password must be at least 6 characters';
      case 'auth/api-key-not-valid.-please-pass-a-valid-api-key':
        return 'Invalid API key. Please contact support.';
      default:
        return 'An error occurred. Please try again.';
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-text-light dark:text-text-dark">Loading...</div>;
  if (user) navigate('/dashboard');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-light-surface dark:bg-dark-bg"
    >
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-poppins font-semibold mb-6 text-center text-text-light dark:text-text-dark">Sign Up for IntelliSight</h2>
        {error && <p className="text-warning mb-4 text-center">{error}</p>}
        <form onSubmit={handleSignup} className="space-y-4">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option>Individual</option>
            <option>Team</option>
          </select>
          <Button type="submit" className="w-full">Sign Up</Button>
        </form>
      </div>
    </motion.div>
  );
};

export default SignupPage;