import Head from "next/head";
import Image from "next/image";
import { NotificationBell, ChatMessageBell, signOut, Chat } from "@roq/nextjs";

import Link from "next/link";


export default function AppLayout({ children }) {
  return (
    <>
      <Head>
        <title>ROQ</title>
      </Head>
      <main >
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Link href={"/"}>
            <Image
              src="/roq.svg"
              alt="ROQ Logo"
              width={80}
              height={80}
              priority
            />
          </Link>
          <div style={{display:'flex', gap:'50px', alignItems:'center'}}>
            <Link href={'/invites'}>Invites</Link>

            <NotificationBell />
           {/* <Chat/>*/}

            <button onClick={() => signOut()} style={{width:'100px', height:'40px'}}>
              Logout
            </button>
          </div>
        </div>
        <div style={{minHeight:'150px'}}> </div>
        <div >{children}</div>
      </main>
    </>
  );
}
