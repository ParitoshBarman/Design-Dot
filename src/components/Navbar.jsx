export default function Navbar() {
    return (
        <header className="w-full bg-[#141429] text-white">
            <div className="max-w-8xl mx-auto flex items-center justify-between py-4">
                <div className="flex items-center justify-between gap-5">

                    {/* Left: Free Consultation Button */}
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full text-sm">
                        FREE CONSULTATION
                    </button>

                    {/* Middle: Navigation */}
                    <nav className="flex items-center space-x-8 font-semibold text-sm uppercase tracking-wide">

                        <a href="#expertise"
                            className="relative text-white after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[3px] after:bg-white">
                            Expertise
                        </a>

                        <a href="#ai"
                            className="bg-gradient-to-r from-gray-400 to-orange-500 bg-clip-text text-transparent font-semibold">
                            AI – Ingenuity
                        </a>

                        <a href="#technology" className="hover:text-orange-500">Technology</a>
                        <a href="#corporate" className="hover:text-orange-500">Corporate</a>
                        <a href="#contact" className="hover:text-orange-500">Contact Us</a>
                    </nav>

                    {/* Right: Contact Info */}
                    <div className="flex items-center space-x-2">
                        <img src="/24-hour-service-svgrepo-com 1.png" alt="24/7" className="w-6 h-6" />
                        <span className="font-bold text-sm">+91 9873282812</span>
                    </div>

                </div>
                <div>
                    {/* Logo */}
                    <div className="ml-6">
                        <img src="/designdot-Title-logo 1.png" alt="DesignDot" className="h-8" />
                    </div>
                </div>
            </div>
        </header>
    );
}