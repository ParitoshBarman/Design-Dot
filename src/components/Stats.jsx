export default function Stats() {
    const stats = [
        { value: "20+", label: "Years in Business" },
        { value: "900+", label: "Clients Worldwide" },
        { value: "1700+", label: "Projects Executed" },
    ];

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16 text-center">
            {stats.map((stat, i) => (
                <div key={i} className="p-6 bg-white shadow rounded-2xl">
                    <h3 className="text-3xl font-bold text-indigo-600">{stat.value}</h3>
                    <p className="text-gray-500">{stat.label}</p>
                </div>
            ))}
        </section>
    );
}