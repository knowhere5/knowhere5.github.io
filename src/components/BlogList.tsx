import { Link } from "react-router-dom";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
};

const posts: BlogPost[] = [
  {
    id: "1",
    title: "Building a Minimalist Blog",
    excerpt: "How I approached building this minimalist blog using React and Tailwind CSS.",
    date: "2024-03-20",
  },
  {
    id: "2",
    title: "The Power of Simplicity",
    excerpt: "Why less is more in software development and life.",
    date: "2024-03-15",
  },
];

const BlogList = () => {
  return (
    <div className="space-y-16">
      {posts.map((post) => (
        <article key={post.id} className="max-w-prose">
          <Link to={`/blog/${post.id}`} className="block group">
            <h2 className="text-xl mb-2 group-hover:text-gray-600 transition-colors">
              {post.title}
            </h2>
            <time className="text-sm text-gray-500 mb-2 block">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <p className="text-gray-600">{post.excerpt}</p>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default BlogList;