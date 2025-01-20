const SocialLinks = () => {
  return (
    <div className="mt-16 mb-16 space-x-4 text-sm">
      <a
        href="https://twitter.com/5mknc5"
        className="text-gray-500 hover:text-gray-800 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      <a
        href="https://github.com/madhav-mknc"
        className="text-gray-500 hover:text-gray-800 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://medium.com/@madhav-mknc"
        className="text-gray-500 hover:text-gray-800 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Medium
      </a>
      <a
        href="https://www.linkedin.com/in/madhav-iitd"
        className="text-gray-500 hover:text-gray-800 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  );
};

export default SocialLinks;