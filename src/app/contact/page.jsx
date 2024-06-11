// by default client side components are first rendered server side and then client side. So the hydration error can be a problem. Like here when using 'use client' , the component first on server side will have diff value for math.random and then on client side will have diff value, so there comes hydration error.

// 1
// "use client";

import Image from "next/image";
import styles from "./contact.module.css";
// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";
// import HydrationTest from "../../components/HydrationTest";

// 2 or we can import it dynamically and not have it render server side at all
// const HydrationTestNoSSR = dynamic(
//   () => import("../../components/HydrationTest"),
//   { ssr: false }
// );

const ContactPage = () => {
  // 1.1
  // const [isClient, setIsClient] = useState(false);

  // 1.2
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // 1.3
  // const a = Math.random();
  // console.log(a);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* 1.4
         {isClient && a} */}

        {/* 2.1 
        <HydrationTestNoSSR /> */}

        {/* 3 - suppress hydration warning meaning dont show it 
        <div suppressHydrationWarning>{a} </div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
