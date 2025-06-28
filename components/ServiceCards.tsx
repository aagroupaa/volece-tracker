const features = [
  { title: "Real-Time Tracking", desc: "Get instant updates on parcel location and status." },
  { title: "Multi-Carrier Support", desc: "Track shipments from UPS, FedEx, DHL, and more." },
  { title: "Secure Admin Panel", desc: "Only admins can add or manage tracking data." },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {features.map((f, idx) => (
        <div key={idx} className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
          <h3 className="text-blue-800 font-semibold text-lg mb-2">{f.title}</h3>
          <p className="text-gray-600 text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
