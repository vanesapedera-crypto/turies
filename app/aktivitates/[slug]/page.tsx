import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { activities } from "@/lib/activities";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ActivityPage({ params }: Props) {
  const { slug } = await params;

  const activity = activities.find((item) => item.slug === slug);

  if (!activity) {
    notFound();
  }

  return (
    <main className="bg-[#161616] text-white min-h-screen">
      <Navbar />

      {/* Hero */}

      <section
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${activity.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6">

          <span className="uppercase tracking-[6px] text-red-500 font-semibold">
            Aktivitāte
          </span>

          <h1 className="text-5xl lg:text-7xl font-black mt-6">
            {activity.title}
          </h1>

          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto">
            {activity.description}
          </p>

        </div>
      </section>

      {/* Informācija */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-[#202020] rounded-3xl p-8">
              <h3 className="font-bold mb-2">Dalībnieki</h3>
              <p className="text-gray-400">
                {activity.participants}
              </p>
            </div>

            <div className="bg-[#202020] rounded-3xl p-8">
              <h3 className="font-bold mb-2">Ilgums</h3>
              <p className="text-gray-400">
                {activity.duration}
              </p>
            </div>

            <div className="bg-[#202020] rounded-3xl p-8">
              <h3 className="font-bold mb-2">Norises vieta</h3>
              <p className="text-gray-400">
                {activity.location}
              </p>
            </div>

            <div className="bg-[#202020] rounded-3xl p-8">
              <h3 className="font-bold mb-2">Drošība</h3>
              <p className="text-gray-400">
                {activity.safety}
              </p>
            </div>

          </div>

          <div className="mt-20 max-w-3xl">

            <h2 className="text-4xl font-black mb-8">
              Par aktivitāti
            </h2>

            <p className="text-gray-400 text-lg leading-9">
              {activity.description}
            </p>

          </div>

          <div className="mt-20">

            <Link
              href="/kontakti"
              className="inline-flex bg-red-600 hover:bg-red-700 transition px-10 py-5 rounded-full font-semibold"
            >
              Saņemt piedāvājumu
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}