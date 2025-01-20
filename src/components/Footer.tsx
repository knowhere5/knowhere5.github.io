import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 text-sm text-gray-500 space-x-4">
      <Link to="/privacy" className="hover:text-gray-800 transition-colors">
        Privacy
      </Link>
      <Link to="/about" className="hover:text-gray-800 transition-colors">
        About
      </Link>
    </footer>
  );
};

export default Footer;