export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-800">Volece</div>
      <a href="/login" className="text-sm text-blue-600 hover:underline">Admin Login</a>
    </header>
  );
}
