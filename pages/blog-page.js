import Layout from "../components/Layout";
import Post from "../components/Molecules/Post";
import { getAllPostsData } from "../lib/posts";

const Blog = (props) => {
  const { posts } = props;
  return (
    <Layout title="Blog">
      <ul className="my-8">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
