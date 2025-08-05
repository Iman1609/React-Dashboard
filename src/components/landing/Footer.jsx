const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-blue-950 text-text-dark">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-poppins font-semibold">IntelliSight</h3>
          <p>AI-Powered Business Insights</p>
        </div>
        <div>
          <h3 className="text-lg text-blue-950 font-poppins font-semibold">Links</h3>
          <ul>
            <li><a href="/about" className="hover:text-accent">About</a></li>
            <li><a href="/contact" className="hover:text-accent">Contact</a></li>
            <li><a href="/privacy" className="hover:text-accent">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-accent">Terms</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-poppins font-semibold">Contact</h3>
          <p>Email: support@intellisight.ai</p>
        </div>
        <div>
          <h3 className="text-lg font-poppins font-semibold">Newsletter</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mb-2 rounded-md bg-gray-300 text-blue-950"
          />
          <button className="px-4 py-2 bg-gray-300 text-black rounded-md">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;