import Head from "next/head";
import Header from "../components/Header";
import TrackingForm from "../components/TrackingForm";
import ServiceCards from "../components/ServiceCards";

export default function Home() {
  return (
    <>
      <Head>
        <title>Volece | Track Your Parcel</title>
        <meta name="description" content="Professional parcel tracking system like StarTrack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50 font-sans">
        <Header />
        <section className="flex flex-col md:flex-row">
          <div className="flex-1 px-6 py-10">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Reliable Parcel Tracking</h1>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
              Track your shipments easily with Volece's modern tracking interface. Enter your tracking number to get real-time updates.
            </p>
            <ServiceCards />
          </div>
          <aside className="w-full md:w-1/3 bg-white shadow-md p-6">
            <TrackingForm />
          </aside>
        </section>
      </main>
    </>
  );
}
