import React, { useContext, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Store } from "../utils/Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut, useSession } from "next-auth/react";
import DropdownLink from "./DropdownLink";
import Cookies from "js-cookie";

import { Menu } from "@headlessui/react";
const Layout = ({ title, children }) => {
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };

  return (
    <>
      <Head>
        <title>{title ? title + " - ShopZone" : "ShopZone"}</title>
        <meta name="description" content="E-E-Commerce website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex min-h-screen flex-col justify-between  ">
        <header className=" sticky  top-0 z-30 ">
          {/* start navigation */}
          <nav className="flex h-[70px] justify-between items-center shadow px-[20px] lg:px-[50px]  bg-[#fff]   ">
            <Link className="text-lg font-bold" href="/">
              ShopZone
            </Link>
            <div className="flex gap-8 text-lg font-bold ">
              <Link href="/cart">
                Cart
                {cartItemsCount > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >
                          Admin Dashboard
                        </DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      <Link
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">login</Link>
              )}
            </div>
          </nav>
          {/* end navigation */}
        </header>
        {/* bg image */}
        {/* <section>
          
          <div className="">
            <img
              src="/Copy-of-Unnamed-Design-1.png"
              alt="banr"
              className="bg-cover object-cover w-full h-[400px]"
            />
          </div>
        </section> */}
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
