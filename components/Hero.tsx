export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Hero Image */}
      <img
        src="/images/hero.jpg"
        alt="Turies piedzīvojumu parks"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#181818]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

          <div className="max-w-2xl">

            <p className="uppercase tracking-[6px] text-red-500 font-semibold mb-4">
              Mobilais piedzīvojumu parks
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none">
              Piedzīvojumi,
              <br />
              kas saliedē.
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-200 leading-8">
              Horizontālā trase, vertikālā trase, Party Trip un mobilais futbola laukums uzņēmumiem,
              festivāliem un pilsētu svētkiem visā Latvijā.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-full font-bold">
                Saņemt piedāvājumu
              </button>

              <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-bold">
                Skatīt aktivitātes
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}