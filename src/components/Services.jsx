export default function Services() {
    const services = [
        "Software Engineering",
        "Software Consulting",
        "Enterprise Development",
        "Big Data Analytics",
        "Mobile Apps",
        "Digital Marketing",
    ];

    return (
        <section className="py-16 px-8 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, i) => (
                    <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
                        <h3 className="font-semibold text-lg text-indigo-600">{service}</h3>
                        <p className="text-gray-500 mt-2">We provide {service.toLowerCase()} tailored to your needs.</p>
                    </div>
                ))}
            </div>
        </section>
    );
}