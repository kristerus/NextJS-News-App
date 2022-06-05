import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

export function Toolbar() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.main}>
        <div onClick={() => router.push("/")}>Home</div>
        <div onClick={() => router.push("/feed/1")}>Feed</div>
        <div onClick={() => router.push("/eom")}>EOM</div>
        <div
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/kristian-dhimitri-b3a20a203/")
          }
        >
          Twitter
        </div>
      </div>
    </div>
  );
}
