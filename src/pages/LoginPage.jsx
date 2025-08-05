import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../lib/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      console.error('Email Login Error:', err.code, err.message);
      setError(getFirebaseErrorMessage(err.code));
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (err) {
      console.error('Google Login Error:', err.code, err.message);
      setError(getFirebaseErrorMessage(err.code));
    }
  };

  const getFirebaseErrorMessage = (code) => {
    switch (code) {
      case 'auth/invalid-email':
        return 'Invalid email address';
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'Invalid email or password';
      case 'auth/api-key-not-valid.-please-pass-a-valid-api-key':
        return 'Invalid API key. Please contact support.';
      case 'auth/popup-closed-by-user':
        return 'Google login cancelled';
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
      className="min-h-screen flex items-center justify-center bg-gray-300 dark:bg-dark-bg"
    >
      <div className="p-8 bg-blue-950 dark:bg-gray-800 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-poppins font-semibold mb-6 text-center text-gray-300 dark:text-text-dark">Login to IntelliSight</h2>
        {error && <p className="text-warning mb-4 text-center">{error}</p>}
        <form onSubmit={handleEmailLogin} className="space-y-4 text-gray-300">
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
          <Button type="submit" className="w-full">Login</Button>
          <Button
            variant="secondary"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center"
          >
            <LogIn className="mr-2" size={20} />
            Login with Google
          </Button>
          <a href="/forgot-password" className="text-primary text-sm mt-4 block text-center hover:underline">
            Forgot Password?
          </a>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginPage;