import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/** HEADER */}
      <header className="flex w-full p-5 justify-between text-lg text-gray-700 cursor-pointer">
        <div className="flex space-x-4 items-center">
          <p>About</p>
          <p>Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p>Gmail</p>
          <p>Images</p>
        </div>
      </header>

      {/** BODY */}

      {/** FOOTER */}
    </div>
  );
}
