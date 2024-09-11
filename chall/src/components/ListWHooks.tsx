import usePosts from "../hooks/usePosts";

const ListWHooks = () => {
  const { data: posts, error, isLoading } = usePosts();

  return (
    <>
      {isLoading ? <p>Loading.....</p> : null}
      {error ? <p>{error.message}:</p> : null}
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </>
  );
};

export default ListWHooks;
