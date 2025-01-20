import { Link, useParams, useNavigate } from "react-router-dom";
import { BlogPost as BlogPostType } from "@/components/BlogList";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin } from "lucide-react";

const posts: BlogPostType[] = [
  {
    id: "1",
    title: "Building a Minimalist Blog",
    excerpt: "How I approached building this minimalist blog using React and Tailwind CSS.",
    date: "2024-03-20",
    slug: "building-a-minimalist-blog",
  },
  {
    id: "2",
    title: "The Power of Simplicity",
    excerpt: "Why less is more in software development and life.",
    date: "2024-03-15",
    slug: "the-power-of-simplicity",
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.slug === slug);
  const nextPost = posts.find((p) => Number(p.id) === Number(post?.id) + 1);

  const shareOnTwitter = () => {
    const url = window.location.href;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        post?.title || ""
      )}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    const url = window.location.href;
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      "_blank"
    );
  };

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16">
        <p>Post not found.</p>
        <Link
          to="/"
          className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="py-8">
        <Link
          to="/"
          className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
        >
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

        <div className="prose dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This is a sample blog post content. In a real implementation, this would be loaded
            from your content management system or markdown files.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The layout is intentionally minimal, focusing on readability and content. The width
            is optimized for comfortable reading, and the typography is clean and simple.
          </p>
        </div>
      </article>

      <div className="mt-16 mb-8 flex gap-4">
        <Button onClick={shareOnTwitter} variant="outline" size="sm">
          <Twitter className="mr-2 h-4 w-4" />
          Share on Twitter
        </Button>
        <Button onClick={shareOnLinkedIn} variant="outline" size="sm">
          <Linkedin className="mr-2 h-4 w-4" />
          Share on LinkedIn
        </Button>
      </div>

      {nextPost && (
        <div className="mt-8 mb-16">
          <Link
            to={`/blog/${nextPost.slug}`}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
          >
            Read Next: {nextPost.title} →
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogPost;