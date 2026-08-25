export default function Corporate() {
  return (
    <section
      id="uznemumiem"
      className="bg-[#181818] py-28 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[5px] text-red-500 font-semibold">
            Uzņēmumiem
          </span>

          <h2 className="text-5xl lg:text-6xl font-black mt-5">
            Vairāk nekā aktivitātes.
          </h2>

          <p className="mt-8 text-xl text-gray-300 leading-8">
            Mēs palīdzam uzņēmumiem radīt saliedējošus un neaizmirstamus
            pasākumus – no sporta spēlēm līdz komandas saliedēšanas dienām.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-[#242424] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Sporta spēles
            </h3>

            <p className="text-gray-400 leading-7">
              Pilnvērtīga aktivitāšu zona uzņēmuma sporta spēlēm un kolektīva pasākumiem.
            </p>
          </div>

          <div className="bg-[#242424] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Komandu saliedēšana
            </h3>

            <p className="text-gray-400 leading-7">
              Aktivitātes, kas veicina sadarbību, komunikāciju un kopīgu pieredzi.
            </p>
          </div>

          <div className="bg-[#242424] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Pilns risinājums
            </h3>

            <p className="text-gray-400 leading-7">
              No vienas atrakcijas līdz pilnai aktivitāšu zonai – pielāgojamies jūsu pasākumam.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}