import React from "react";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - ShopZone" : "ShopZone"}</title>
        <meta name="description" content="E-E-Commerce website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between  ">
        <header className=" sticky  top-0 z-30 ">
          {/* start navigation */}
          <nav className="flex h-[70px] justify-between items-center shadow px-[20px] lg:px-[50px]  bg-[#fff]   ">
            <Link className="text-lg font-bold" href="/">
              ShopZone
            </Link>
            <div className="flex gap-8 text-lg font-bold ">
              <Link href="/cart">Cart</Link>
              <Link href="/login">login</Link>
            </div>
          </nav>
          {/* end navigation */}
        </header>
        {/* bg image */}
        <section>
          <div className="">
            <img
              src="/banar.jpg"
              alt="banr"
              className="bg-cover object-cover w-full h-[600px]"
            />
          </div>
        </section>
        {/* bg video */}
        <main className=" container m-auto px-[20px]  mt-4 lg:px-[50px] ">
          {children}
        </main>
        <footer className="flex justify-center items-center  h-10 shadow-inner ">
          <p>
            Copyright &copy; 2023{" "}
            <span className=" font-bold text-[#1a162e]">ShopZone</span> by
            <span className=" font-bold text-[#16212e]">ismail-safha</span>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
