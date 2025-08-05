import { motion } from 'framer-motion';

     const Button = ({ children, variant = 'primary', ...props }) => {
       const baseStyles = 'px-4 py-2 rounded-md font-sora text-sm font-medium transition-all';
       const variants = {
         primary: 'bg-primary text-text-dark hover:bg-accent',
         secondary: 'bg-light-surface text-text-light border border-primary hover:bg-accent/10',
         ghost: 'text-primary hover:bg-primary/10',
       };

       return (
         <motion.button
           className={`${baseStyles} ${variants[variant]}`}
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           {...props}
         >
           {children}
         </motion.button>
       );
     };

     export default Button;