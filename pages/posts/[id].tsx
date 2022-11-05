import BackButton from "../../components/Atoms/Buttons/BackButton";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { Post } from "../../types/api/Posts";

const Post = ({ post }: { post: Post }) => {
  if (!post) {
    return <div>No article available</div>;
  }
  return (
    <Layout title={post.title}>
      <div className="w-7/12 m-auto flex flex-col justify-center">
        <header className="mt-4">
          <p className="text-center">ID: {post.id}</p>
          <h1 className="mb-8 text-xl font-bold text-center">{post.title}</h1>
        </header>
        <div className="px-10">
          <p>{post.body}</p>
        </div>
        <BackButton url="/blog-page/" text="Back to Blog" />
      </div>
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const post: Post = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
