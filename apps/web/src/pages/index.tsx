import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="h-screen w-screen bg-gradient-to-b from-[#875510] to-[#271906] text-white">
        <div className="flex flex-col justify-between">
          <div className="flex h-screen w-screen flex-col justify-center px-5 md:flex-row md:items-center md:pr-0 md:pl-5">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold">
                The <span className="text-[#F79B1E]">only</span> bot you need to
                have fun.
              </h1>
              <p className="mt-2">
                MercuryBot helps keep your server members entertained with fun
                games, hilarious memes, and more.
              </p>
              <div className="p-2 md:p-3"></div>
              <Link href="/invite">
                <button className="rounded-md bg-white/10 px-3 py-2 transition-opacity hover:bg-white/20">
                  Invite to your server
                </button>
              </Link>
            </div>
            <Image
              src="/logo.png"
              alt="MercuryBot Logo"
              className="vert-move float-right mx-auto block"
              width={300}
              height={300}
            />
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 p-4 text-white/50">
        Made with &hearts; by{" "}
        <Link
          href="https://github.com/ToastifyDev"
          className="text-[#F79B1E]/50 hover:underline"
        >
          ToastifyDev
        </Link>
        .
      </footer>
    </>
  );
}
