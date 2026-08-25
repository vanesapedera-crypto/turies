export default function WhyUs() {
  const stats = [
    {
      title: "15+",
      subtitle: "gadu pieredze",
    },
    {
      title: "Visa",
      subtitle: "Baltija",
    },
    {
      title: "1000+",
      subtitle: "apkalpotu dalībnieku",
    },
    {
      title: "100%",
      subtitle: "pielāgoti pasākumi",
    },
  ];

  return (
    <section className="py-28 bg-[#1b1b1b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-red-500 font-semibold">
            Kāpēc TURIES?
          </span>

          <h2 className="text-5xl font-black text-white mt-6">
            Pieredze, kas vieno komandas
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-[#222222] rounded-3xl p-10 border border-white/10 hover:border-red-500 transition"
            >
              <h3 className="text-5xl font-black text-red-500">
                {item.title}
              </h3>

              <p className="mt-5 text-gray-300 text-lg leading-8">
                {item.subtitle}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}