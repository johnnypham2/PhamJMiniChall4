import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  completed: boolean;
}

const ListWQuery = () => {
  const fetchPost = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);

  const {
    data: post,
    error,
    isLoading,
  } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPost,
  });

  return (
    <>
      {isLoading ? <p>Loading.....</p> : null}
      {error ? <p>{error.message}:</p> : null}
      {post?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </>
  );
};

export default ListWQuery;
