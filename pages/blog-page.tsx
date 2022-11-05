import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import PostItem from "../components/Molecules/PostItem";
import { getAllPostsData } from "../lib/posts";
import { Post } from "../types/api/Posts";

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
};

const Blog = ({ posts }: { posts: Post[] }) => {
  return (
    <Layout title="Blog">
      <ul className="my-8">
        {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export default Blog;
