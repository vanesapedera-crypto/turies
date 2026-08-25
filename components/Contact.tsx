import Link from "next/link";

export default function Contact() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Fona bilde */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cta.jpg')",
        }}
      />

      {/* Tumšs pārklājums */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Saturs */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <span className="uppercase tracking-[5px] text-red-500 font-semibold">
          Gatavi piedzīvojumam?
        </span>

        <h2 className="text-5xl lg:text-7xl font-black mt-6 leading-tight">
          Izveidosim pasākumu,
          <br />
          ko jūsu komanda neaizmirsīs.
        </h2>

        <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-9">
          No nelielām komandām līdz vairāku simtu dalībnieku pasākumiem —
          palīdzēsim atrast piemērotāko risinājumu tieši jūsu uzņēmumam.
        </p>

        <Link
          href="/kontakti"
          className="inline-flex mt-12 bg-red-600 hover:bg-red-700 transition px-10 py-5 rounded-full text-lg font-semibold"
        >
          Sazināties ar mums
        </Link>

      </div>

    </section>
  );
}