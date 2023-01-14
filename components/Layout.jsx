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

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          {/* start navigation */}
          <nav className="flex h-12 justify-between items-center shadow px-[70px]">
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
        <main className=" container m-auto px-[70px] mt-4">{children}</main>
        <footer className="flex justify-center items-center  h-10 shadow-inner">
          <p>
            Copyright &copy; 2022{" "}
            <span className=" font-bold text-[#1a162e]">ShopZone</span> by
            <span className=" font-bold text-[#16212e]">ismail-safha</span>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
