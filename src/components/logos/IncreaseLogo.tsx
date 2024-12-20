'use client';

import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IncreaseLogo(){
    return (
        <div className="mt-4">
            <div className="mt-4 flex gap-1 items-center">
                <FontAwesomeIcon icon={faArrowTrendUp} className="h-4 text-[#15B79F]" />
                <span className="text-[#15B79F]">15%</span>
            <span>decrease</span>
        </div>
        </div>
    )
}