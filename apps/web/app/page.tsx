import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { InputBox } from "@repo/ui/input-box";

export default function Home() {
  return (
    <div className={styles.page}>
    <Button appName="webapp"> hii there </Button>
    <InputBox/>
     </div>
  );
}
