import { Link, useParams, useNavigate } from "react-router-dom";
import { BlogPost as BlogPostType } from "@/components/BlogList";
import Footer from "@/components/Footer";

const posts: BlogPostType[] = [
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

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);
  const nextPost = posts.find((p) => Number(p.id) === Number(id) + 1);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16">
        <p>Post not found.</p>
        <Link to="/" className="text-gray-500 hover:text-gray-800 transition-colors">
          Go to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="py-8">
        <Link to="/" className="text-gray-500 hover:text-gray-800 transition-colors">
          ← Homepage
        </Link>
      </div>

      <article className="max-w-prose">
        <h1 className="text-3xl mb-4">{post.title}</h1>
        <time className="text-sm text-gray-500 mb-8 block">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        <div className="prose">
          <p className="text-gray-600 mb-4">
            This is a sample blog post content. In a real implementation, this would be loaded
            from your content management system or markdown files.
          </p>
          <p className="text-gray-600 mb-4">
            The layout is intentionally minimal, focusing on readability and content. The width
            is optimized for comfortable reading, and the typography is clean and simple.
          </p>
        </div>
      </article>

      {nextPost && (
        <div className="mt-16 mb-16">
          <Link
            to={`/blog/${nextPost.id}`}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            Read Next: {nextPost.title} →
          </Link>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;