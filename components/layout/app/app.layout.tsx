/*
  This component showcases the NotificationBell, and ChatMessageBell from ROQ 
*/

import Head from "next/head";
import Image from "next/image";
import { NotificationBell, ChatMessageBell, signOut } from "@roq/nextjs";
import { useRouter } from "next/router";

import Link from "next/link";
import { routes } from "routes";


export default function AppLayout({ children }) {
  return (
    <>
      <Head>
        <title>ROQ</title>
        <meta name="description" content="ROQ Kickstarter with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div >
          <Link href={"/"}>
            <Image
              src="/roq.svg"
              alt="ROQ Logo"
              width={80}
              height={80}
              priority
            />
          </Link>
          <div >
            <Link href={'/invites'}>Invites</Link>
            {/* ROQ Notification and Chat bell */}
            <NotificationBell />
            {/*<ChatMessageBell
              onClick={() => router.push('./chat')}
            />*/}

            <button onClick={() => signOut()} className="btn btn-sm">
              Logout
            </button>
          </div>
        </div>
        <div >{children}</div>
      </main>
    </>
  );
}
