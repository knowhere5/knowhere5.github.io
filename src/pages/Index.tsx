import Bio from "@/components/Bio";
import BlogList from "@/components/BlogList";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <Bio />
      <BlogList />
      <SocialLinks />
    </div>
  );
};

export default Index;