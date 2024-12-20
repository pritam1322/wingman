'use client';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ChatsLogo from "../tabsLogos/ChatsLogo";
import SalesLogo from "../tabsLogos/SalesLogo";
import SummaryLogo from "../tabsLogos/SummaryLogo";

export default function Header() {
    const [currentTab, setCurrentTab] = useState<string>('Summary');
    const pathname = usePathname(); // Use usePathname for Next.js 13+

    // Set the current tab based on the URL path
    useEffect(() => {
        if (pathname === '/chats') {
            setCurrentTab('Chats');
        } else if (pathname === '/sales') {
            setCurrentTab('Sales');
        } else if (pathname === '/summary') {
            setCurrentTab('Summary');
        }
    }, [pathname]); // Re-run on path change

    return (
        <header className="flex gap-1 font-bold max-h-[94px] border-b border-gray-200">
            <div className="flex gap-2 my-[24px] ml-[40px]">
                <nav
                    onClick={() => {
                        setCurrentTab('Summary');
                        window.location.href = '/'; // Manually change location
                    }}
                    className={`flex group text-gray-400 ${currentTab !== "Summary" ? " text-gray-400" : "text-gray-700 bg-[#CCFBEF]"} rounded-full transition-colors duration-300 w-[137px] h-[46px]`}
                >
                    <SummaryLogo />
                </nav>
                <nav
                    onClick={() => {
                        setCurrentTab('Sales');
                        window.location.href = '/sales'; // Manually change location
                    }}
                    className={`flex group text-gray-400 ${currentTab !== "Sales" ? " text-gray-400" : "text-gray-700 bg-[#CCFBEF]"} rounded-full transition-colors duration-300 w-[102px] h-[46px]`}
                >
                    <SalesLogo />
                </nav>
                <nav
                    onClick={() => {
                        setCurrentTab('Chats');
                        window.location.href = '/chats'; // Manually change location
                    }}
                    className={`flex group text-gray-400 ${currentTab !== "Chats" ? " text-gray-400" : "text-gray-700 bg-[#CCFBEF]"} rounded-full transition-colors duration-300 w-[106px] h-[46px]`}
                >
                    <ChatsLogo />
                </nav>
            </div>
        </header>
    );
}
