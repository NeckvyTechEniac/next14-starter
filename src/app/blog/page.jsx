import styles from "./blog.module.css";
import PostCard from "../../components/postCard/postCard";
// import { getPosts } from "../../lib/data";

// fetch data with external api
// const getData = async () => {
//   // here the data will be fetched every 3600 secondss (1 hour)
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });
//   // for not storing the data in cache. Nextjs caches the data by default. SO if we have some data that is constantly changing, it is better to not get data form cache and load it everytime
//   // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//   //   cache: "no-store",
//   // });
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

//fetch data using API routes
const getData = async () => {
  const res = await fetch(`${process.env.NEXTLOCALURL}/api/blog`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const BlogPage = async () => {
  // fetch data with external api
  const posts = await getData();

  // fetch daata without an external api
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
