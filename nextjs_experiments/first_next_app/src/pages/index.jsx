import Anchor from "@/components/Anchor";
// import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to dog page</title>
      </Head>
      <h1>Hello from home</h1>

      {/* <Link href={"/dogs/henry"}> Go to Henry's with prefetch</Link> */}
      <Anchor href={"/dogs/henry"}>Go to henrys page without prefetching</Anchor>
    </>
  );
}
