import Link from "next/link";
import { NextPage } from "next";
import { Posts } from "../../types/api/Posts";

const PostItem: NextPage<Posts> = (props) => {
  const { post } = props;

  return (
    <li className="mt-2 flex items-center">
      <span>{post.id}</span>:
      <Link href={`/posts/${post.id}/`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200 transition-all ml-1">
          {post.title}
        </span>
      </Link>
    </li>
  );
};

export default PostItem;
