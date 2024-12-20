'use client';
import { faCheck, faCoins, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatsLogo from "../logos/ChatsLogo";
import DecreaseLogo from "../logos/DecreaseLogo";
import IncreaseLogo from "../logos/IncreaseLogo";
import Insights from "./Insights";
import Orders from "./Orders";

export default function Hero(){
    return (
        <section className="border rounded-2xl py-7 px-7">
            <div className="flex justify-between">
                <span className="text-[2rem] font-semibold font-inter text-gray-800">At a glance</span>
                <div className="flex items-center">
                    <select className="border rounded-md px-3 py-1 text-gray-700 text-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="7">7 days</option>
                        <option value="14">14 days</option>
                        <option value="21">21 days</option>
                        <option value="28">28 days</option>
                    </select>
                    {/* <FontAwesomeIcon icon={faChevronDown} className="h-4 text-gray-600 ml-2" /> */}
                </div>

            </div>
            <div className="gap-8 grid grid-cols-3 mt-10 ">
                <div className="border rounded-xl py-6 px-4">
                    <div className="flex flex-row gap-3 text-xs text-gray-500 font-semibold">
                        <div className="flex items-center justify-center w-[4px] h-[4px]"><ChatsLogo bgColor={"#6B72A0"} classProps="h-6"/></div>
                        <span>CONSULTATIONS</span>
                    </div>
                    <div className="my-2 text-4xl font-semibold text-gray-700">24</div>
                    <IncreaseLogo />
                </div>
                <div className="border rounded-xl py-6 px-4">
                    <div className="flex flex-row gap-2 text-xs text-gray-500 items-center font-semibold">
                        <FontAwesomeIcon icon={faTag} className="h-3 items-center text-[#6B72A0]" />
                        <span>ORDER PLACED</span>
                    </div>
                    <div className="my-2 text-4xl font-semibold text-gray-700">12</div>
                    <DecreaseLogo />
                </div>
                <div className="border rounded-xl py-6 px-4">
                    <div className="flex flex-row gap-2 text-xs items-center text-gray-500 font-semibold">
                    <FontAwesomeIcon icon={faCheck} className="h-3 items-center text-sm text-[#6B72A0]" />
                        <span>CONVERSION</span>
                    </div>
                    <div className="my-2 text-4xl font-semibold text-gray-700">50%</div>
                    <IncreaseLogo />
                </div>
                <div className="border rounded-xl py-6 px-4">
                    <div className="flex flex-row gap-2 items-center text-xs text-gray-500 font-semibold">
                    <FontAwesomeIcon icon={faCoins} className="h-3 text-sm text-[#6B72A0]" />
                        <span>TOTAL SALES VISIT</span>
                    </div>
                    <div className="my-2 text-4xl font-semibold text-gray-700">$2,400</div>
                    <IncreaseLogo />
                </div>
                <div className="border rounded-xl py-6 px-4">
                    <div className="flex flex-row gap-2 items-center text-xs text-gray-500 font-semibold">
                    <FontAwesomeIcon icon={faCoins} className="h-3 text-sm text-[#6B72A0]" />
                        <span>AVG SALES VISIT</span>
                    </div>
                    <div className="my-2 text-4xl font-semibold text-gray-700">$240</div>
                    <IncreaseLogo />
                </div>
                <div className="border rounded-xl py-6 px-4">
                    <div className="flex flex-row gap-2 items-center text-xs text-gray-500 font-semibold">
                    <FontAwesomeIcon icon={faCoins} className="h-3 text-sm text-[#6B72A0]" />
                        <span>COMMISSION PAID</span>
                    </div>
                    <div className="my-2 text-4xl font-semibold text-gray-700">$240</div>
                    <IncreaseLogo />
                </div>
            </div>

            <Insights />
            <Orders />
        </section>
    )
}