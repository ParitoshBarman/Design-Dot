export default function EngagementModels() {
    return (
        <section className="w-full bg-white py-12 px-8 flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">

            {/* Left Side: Image + Content */}
            <div className="w-full md:w-1/3">
                <img src="/freepik-2974 1.png" alt="Engagement" className="rounded-lg shadow-md mb-6" />
                <div>
                    <h2 className="text-xl font-bold mb-4">ENGAGEMENT MODELS<br /> <p className="space-y-3 text-gray-700">Hire developers who are committed to your project.</p></h2>
                     
                </div>
                <ul className="space-y-3 text-gray-700">
                    <li><strong>Dedicated Teams of Developers</strong> <br /> Hire developers who are committed to your project.</li>
                    <li><strong>Outsource Your Work</strong> <br /> Get a solution that is tailored to your needs.</li>
                    <li><strong>Staff Augmentation</strong> <br /> Close the talent gap on your internal staff.</li>
                </ul>
            </div>

            {/* Middle Menu */}
            <div className="w-full md:w-1/3">
                <ul className="space-y-4 font-semibold text-indigo-700">
                    {[
                        "ENGINEERING", "WEB & ECOMMERCE", "MOBILE APP",
                        "BRAND DEVELOPMENT", "MEDIA ADVERTISING",
                        "DIGITAL MARKETING", "DIGITAL TRANSFORMATION",
                        "EMERGING TECHNOLOGIES", "IT SUPPORT & TESTING", "SOLUTIONS"
                    ].map((item, idx) => (
                        <li key={idx} className="hover:text-orange-500 cursor-pointer">{item} →</li>
                    ))}
                </ul>
            </div>

            {/* Right Services List */}
            <div className="w-full md:w-1/3">
                <h3 className="font-bold text-lg mb-4 border-b-2 border-indigo-700 pb-2">ENGINEERING</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-700">
                    <ul className="space-y-2">
                        <li>Software Engineering</li>
                        <li>Software Consulting</li>
                        <li>Software Development Services</li>
                        <li>Enterprise Software Development</li>
                        <li>Custom Software Development</li>
                        <li>Software Product Development</li>
                        <li>E-Learning Application</li>
                        <li>ERP | CRM | HRM</li>
                    </ul>
                    <ul className="space-y-2">
                        <li>Software Development Outsourcing</li>
                        <li>Offshore Software Development</li>
                        <li>Big Data Analytics</li>
                        <li>Application Modernization</li>
                        <li>API Development</li>
                        <li>AI in Software</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}