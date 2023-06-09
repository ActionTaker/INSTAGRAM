import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico"/>  
      </Head>
      {/*header*/}
      <Header />
      {/*Feed*/}
      <Feed/>
      {/*Modal*/}
    </div>

  
  )
}
