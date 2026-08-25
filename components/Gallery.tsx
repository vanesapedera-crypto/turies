export default function Gallery() {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
    "/images/gallery9.jpg",
    "/images/gallery10.jpg",
    "/images/gallery11.jpg",
    "/images/gallery12.jpg",
    "/images/gallery13.jpg",
    "/images/gallery14.jpg",
    "/images/gallery15.jpg",
    "/images/gallery16.jpg",
    "/images/gallery17.jpg",
    "/images/gallery18.jpg",
    "/images/gallery19.jpg",
    "/images/gallery20.jpg",
    "/images/gallery21.jpg",
  ];

  return (
    <section
      id="galerija"
      className="bg-[#181818] py-28 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-red-500 font-semibold">
            Galerija
          </span>

          <h2 className="text-5xl lg:text-6xl font-black mt-5">
            Emocijas darbībā
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Ieskats uzņēmumu pasākumos, sporta spēlēs un festivālos.
          </p>

        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">

          {images.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl break-inside-avoid group mb-5"
            >
              <img
                src={image}
                alt={`Galerija ${index + 1}`}
                className="w-full rounded-3xl object-cover group-hover:scale-105 duration-700"
              />
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}