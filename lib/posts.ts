import { Post } from "../types/api/Posts";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export const getAllPostsData = async () => {
  const res = await fetch(new URL(apiUrl));
  const posts: Post[] = await res.json();
  return posts;
};

export const getAllPostIds: () => Promise<{
  params: { id: string };
}> = async () => {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
};

export const getPostData: (id: string) => Promise<Post> = async (id) => {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = res.json();
  return post;
};
