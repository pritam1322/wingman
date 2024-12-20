'use client';
export default function SalesPage(){
    return (
        <section className="max-w-3xl mx-auto mt-12">
            <div className="stats shadow bg-gray-700">
                <div className="stat">
                    <div className="stat-figure text-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-8 w-8 stroke-current text-pink-600">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    </div>
                    <div className="stat-title text-white">Total Products</div>
                    <div className="stat-value text-gray-300">25.6K</div>
                    <div className="stat-desc text-white">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-8 w-8 stroke-current text-yellow-500">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    </div>
                    <div className="stat-title text-white">Product Consultants Completed</div>
                    <div className="stat-value text-gray-300">7.6K</div>
                    <div className="stat-desc text-white">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                    
                    </div>
                    <div className="stat-title text-white">Product Sales</div>
                    <div className="stat-value text-gray-300">86%</div>
                    <div className="stat-title text-white">sold out</div>
                </div>
                </div>
        </section>
    )
}