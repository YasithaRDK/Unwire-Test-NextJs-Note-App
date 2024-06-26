"use client";

import { useSession } from "next-auth/react";

const Footer = () => {
  const { data: session } = useSession();
  return (
    <>
      {session && (
        <footer className="bottom-0 w-full py-5 mt-10 bg-white border-t border-gray-300">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} QuickNotez. All rights reserved.
            </p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
