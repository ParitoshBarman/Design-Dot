export default function StatsCTA() {
    const stats = [
        { value: "20+", label: "YEARS IN BUSINESS" },
        { value: "900+", label: "CLIENT’S WORLDWIDE" },
        { value: "1700+", label: "PROJECT EXECUTED" },
    ];

    return (
        <section
            className="relative w-full text-white">
            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0A2F75]/90 via-black/60 to-black/40"></div> */}

            {/* Content */}
            <div className="relative z-10 max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-6 gap-6" style={{ backgroundImage: "url('/backgroundImage.png')", backgroundSize: "cover", backgroundPosition: "center",
            }}>

                {/* Stats */}
                <div className="flex flex-col md:flex-row gap-10 text-center md:text-left">
                    {stats.map((item, idx) => (
                        <div key={idx}>
                            <h3 className="text-2xl font-bold text-center">{item.value}</h3>
                            <p className="text-xs tracking-wide">{item.label}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Text */}
                <div className="text-center md:text-left max-w-2xl">
                    <h2 className="text-base font-bold">
                        Want to consult with us on a project but need a quote?{" "}
                        <span className="font-semibold">For an estimate, click this button.</span>
                    </h2>
                    <p className="text-xs mt-1 text-gray-200">
                        Start with a free exploratory call—we’ll listen to your needs and suggest
                        tailored strategies, obligation-free.
                    </p>
                </div>

                {/* CTA Button */}
                <button className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
                    <img
                        src="/arrow-right-svgrepo-com 1.png"
                        alt="CTA Icon"
                        className="w-10 h-10"
                    />
                </button>

            </div>
        </section>
    );
}
