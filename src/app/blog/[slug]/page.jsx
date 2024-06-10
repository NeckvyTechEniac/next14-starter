import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/25391643/pexels-photo-25391643/free-photo-of-a-drink-with-an-orange-slice-and-basil-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/25391643/pexels-photo-25391643/free-photo-of-a-drink-with-an-orange-slice-and-basil-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          ullam soluta ducimus libero porro atque qui perspiciatis optio iste
          veritatis enim minus, mollitia sequi suscipit neque facilis incidunt
          sapiente modi. Suscipit praesentium laudantium dolore, aliquid
          distinctio nostrum rerum, accusamus eius adipisci dolorum et cumque
          quia voluptas! Corrupti quibusdam minus at fugiat. Obcaecati cumque
          blanditiis doloribus est? Voluptatem commodi molestias corrupti
          voluptatibus pariatur, ea, modi perspiciatis iusto, odit ipsam
          deserunt. Tempora?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
