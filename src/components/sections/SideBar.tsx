'use client';

import { faComment, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";  // Import the usePathname hook
import FourChatsLogo from "../logos/FourChatsLogo";
import GearLogo from "../logos/GearLogo";
import MainLogo from "../logos/MainLogo";
import { useState, useEffect } from "react";

export default function SideBar() {

  const pathname = usePathname(); // Current path from client routing
  const [activePath, setActivePath] = useState<string | null>(null);

  // Ensure the active path is updated only on the client
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <div className="bg-sidebarcolor min-h-screen max-w-[60px] flex flex-col justify-between">
      <div>
        <div className="flex flex-col justify-center items-center">
          <MainLogo />
          <span className="border-b-[1px] mt-7 mb-5 w-1/2 border-divider"></span>
        </div>

        <nav className="flex flex-col gap-4">
          <div
            onClick={() => (window.location.href = '/')}
            className="flex justify-center items-center"
          >
            <FontAwesomeIcon icon={faHouse} className={`h-5 rounded-md  p-2 ${
              activePath === '/' ?  'bg-gray-50 text-[#115E56]' : 'text-[#CDFBEE]' }`} />
          </div>
          <div
            onClick={() => { window.location.href = '/chats'; }} // Manually change location
            className={`flex justify-center items-center`}
          >
            <FontAwesomeIcon icon={faComment} className={`h-5 rounded-md p-2 ${
              activePath === '/chats' ?  'bg-gray-50 text-[#115E56]' : 'text-[#CDFBEE]' }`} />
          </div>
          <div className="flex justify-center items-center">
            <FourChatsLogo /> 
          </div>
        </nav>
      </div>

      <div className="flex justify-center items-center">
        <GearLogo />
      </div>
    </div>
  );
}
