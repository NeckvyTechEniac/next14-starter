import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/25391643/pexels-photo-25391643/free-photo-of-a-drink-with-an-orange-slice-and-basil-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>10.06.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ipsam
          modi commodi vel repudiandae sapiente veritatis dolorem consectetur
          voluptates debitis perferendis excepturi autem numquam impedit rerum
          fugit at esse nostrum voluptatibus? Quo non incidunt esse?
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE{" "}
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
