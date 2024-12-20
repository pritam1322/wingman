'use client';

import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DecreaseLogo(){
    return (
        <div className="mt-4 flex gap-1 items-center">
            <FontAwesomeIcon icon={faArrowTrendDown} className="h-4 text-red-600" />
            <span className="text-red-600">15%</span>
            <span>decrease</span>
        </div>
    )
}