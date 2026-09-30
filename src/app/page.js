import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <a className={styles.primary}
            href="./filmes"
          >
            filmes
          </a>
          <a className={styles.secondary}
            href="./produtos"
          >
          produtos
          </a>
        </div>
      </main>
    </div>
  );
}
