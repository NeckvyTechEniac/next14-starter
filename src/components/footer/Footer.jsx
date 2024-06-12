import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Neckvy Shah</div>
      <div className={styles.text}>
        Neckvy&apos;s creative thoughts agenct ©️ All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
