export default function Navbar() {
    return (
        <header className="w-full bg-black text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

                {/* Left: Free Consultation Button */}
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full">
                    FREE CONSULTATION
                </button>

                {/* Middle: Navigation */}
                <nav className="flex items-center space-x-8 font-semibold text-sm uppercase tracking-wide">
                    <a href="#expertise" className="hover:text-orange-500">Expertise</a>
                    <a href="#ai" className="hover:text-orange-500">AI – Ingenuity</a>
                    <a href="#technology" className="hover:text-orange-500">Technology</a>
                    <a href="#corporate" className="hover:text-orange-500">Corporate</a>
                    <a href="#contact" className="hover:text-orange-500">Contact Us</a>
                </nav>

                {/* Right: Contact Info */}
                <div className="flex items-center space-x-2">
                    <img src="/24-hour-service-svgrepo-com 1.png" alt="24/7" className="w-6 h-6" />
                    <span className="font-bold text-sm">+91 9873282812</span>
                </div>

                {/* Logo */}
                <div className="ml-6">
                    <img src="/designdot-Title-logo 1.png" alt="DesignDot" className="h-8" />
                </div>
            </div>
        </header>
    );
}