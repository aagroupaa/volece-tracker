export default function TrackingForm() {
  return (
    <form className="space-y-4">
      <h2 className="text-lg font-semibold text-blue-800">Track Your Parcel</h2>
      <input
        type="text"
        placeholder="Enter tracking number"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
        <option>Select Carrier</option>
        <option>UPS</option>
        <option>FedEx</option>
        <option>DHL</option>
        <option>USPS</option>
        <option>Amazon</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Track
      </button>
    </form>
  );
}
