const SocialLinks = () => {
  return (
    <div className="mt-16 mb-16 space-x-4 text-sm">
      <a
        href="https://twitter.com/yourusername"
        className="text-gray-500 hover:text-gray-800 transition-colors"
      >
        Twitter
      </a>
      <a
        href="https://github.com/yourusername"
        className="text-gray-500 hover:text-gray-800 transition-colors"
      >
        GitHub
      </a>
      <a
        href="https://medium.com/@yourusername"
        className="text-gray-500 hover:text-gray-800 transition-colors"
      >
        Medium
      </a>
    </div>
  );
};

export default SocialLinks;