export default function EngagementModels() {
    return (
        <section className="w-full bg-[#fff4f4] py-5 px-5 flex flex-col md:flex-row gap-8 max-w-8xl mx-auto" style={{ "maxWidth": "1500px" }}>

            {/* Left Side: Image + Content */}
            <div className="w-full md:w-1/3 min-w-[300px]">
                <img src="/freepik-2974 1.png" alt="Engagement" className="rounded-lg shadow-md mb-6" />
                {/* Title + Subtitle */}
                <h2 className="text-2xl font-bold text-black mb-2">
                    ENGAGEMENT MODELS
                </h2>
                <p className="text-gray-700 mb-6" style={{ "fontSize": "13px" }}>
                    <b>Hiring Software Developers</b>, It only takes a few clicks
                </p>
                <ul className="space-y-3 text-gray-700 ml-6 text-sm">
                    <li><strong className="text-lg">Dedicated Teams of Developers</strong> <br /> Hire developers who are committed to your project.</li>
                    <li><strong>Outsource Your Work</strong> <br /> Get a solution that is tailored to your needs.</li>
                    <li><strong>Staff Augmentation</strong> <br /> Close the talent gap on your internal staff.</li>
                </ul>
            </div>

            {/* Middle Menu */}
            <div className="w-full md:w-1/3 pr-6 border-r border-gray-300" style={{ "borderRight": "2px solid #00539C", "margin": "10px 10px 0 81px", "minWidth": "300px" }}>
                <ul className="space-y-4 text-sm font-bold tracking-wide text-[#00539c]">

                    {/* Active item */}
                    <li className="flex items-center justify-between">
                        <span className="bg-[#00539c] text-white px-3 py-1 rounded font-bold uppercase text-">
                            ENGINEERING
                        </span>
                    </li>

                    {/* Other menu items */}
                    {[
                        "WEB & ECOMMERCE",
                        "MOBILE APP",
                        "BRAND DEVELOPMENT",
                        "MEDIA ADVERTISING",
                        "DIGITAL MARKETING",
                        "DIGITAL TRANSFORMATION",
                        "EMERGING TECHNOLOGIES",
                        "IT SUPPORT & TESTING",
                        "SOLUTIONS",
                    ].map((item, idx) => (
                        <li
                            key={idx}
                            className="flex items-center justify-between uppercase cursor-pointer hover:text-orange-500 text-lg"
                        >
                            <span>{item}</span>
                            <span className="text-xs" style={{ "fontSize": "8px" }}>🞂</span>
                        </li>
                    ))}
                </ul>
            </div>


            {/* Right Services List */}
            <div className="w-full md:w-2/3 pl-8 pt-5">
                {/* Section Title with underline */}
                <div className="flex items-center mb-8">
                    <h3 className="font-bold uppercase text-[#00539c] text-lg tracking-wide mr-4">
                        ENGINEERING
                    </h3>
                    <div className="flex-1 border-b border-[#00539c]"></div>
                </div>

                {/* Two-column service grid */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-[#00539c] text-lg">
                    <ul className="space-y-3">
                        <li>Software Engineering</li>
                        <li>Software Consulting</li>
                        <li>Software Development Services</li>
                        <li>Enterprise Software Development</li>
                        <li>Custom Software Development</li>
                        <li>Software Product Development</li>
                        <li>E-Learning Application</li>
                    </ul>

                    <ul className="space-y-3">
                        <li>Software Development Outsourcing</li>
                        <li>Offshore Software Development</li>
                        <li>Big Data Analytics</li>
                        <li>Application Modernization Services</li>
                        <li>API Development</li>
                        <li>AI in Software</li>
                    </ul>
                </div>

                {/* ERP | CRM | HRM Row */}
                <div className="mt-6 text-[#00539c] text-lg font-semibold space-x-4">
                    <span>ERP</span>
                    <span>|</span>
                    <span>CRM</span>
                    <span>|</span>
                    <span>HRM</span>
                </div>
            </div>

        </section>
    );
}