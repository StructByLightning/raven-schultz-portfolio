import css from "./not-found.module.scss";
import Navbar from "@/sections/navbar";

export default function Test() {
  return <>
    <title>404 | Voidgoddess</title>
    <Navbar/>
    <main className={css.main}>
      404 Not Found
    </main>
  </>;
}
