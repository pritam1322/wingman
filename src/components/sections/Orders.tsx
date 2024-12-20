'use client'
import ProducTables from "../tables/ProductTables";

export default function Orders(){
    return (
        <section className=" py-8 text-gray my-6" >
            <div className="mt-2 mb-8">
                <span className="text-[2rem] font-semibold text-gray-800 font-inter">Orders</span>
            </div>
            <ProducTables />
        </section>
    )
}