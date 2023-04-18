import Head from "next/head";
import Image from "next/image";

export default function ({ data }) {
  const { content } = data;
  return (
    <>
      <Head>
        <title>Henry for real</title>
      </Head>
      <h1>{content.heading}</h1>

      <p>{content.text}</p>
      <Image
        src={content.image.src}
        alt={content.image.alt}
        width={content.image.width}
        height={content.image.height}
        sizes=" (max-width: 750px) 100vw, 750px" //this makes sure the image wil be loaded in the right size, max size is 750px.
      ></Image>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(context.params.slug);
  const slug = context.params.slug;
  const api = "https://bucolic-bombolone-857476.netlify.app/api/dogs/" + slug;
  const res = await fetch(api);
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();
  console.log(data);

  return {
    props: {
      data: data,
    },
  };
}
