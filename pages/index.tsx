import Head from 'next/head';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-md border border-gray-300 p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
          Web Simulasi Skripsi
        </h1>

        <p className="text-gray-800 text-lg mb-4 text-center">
          Website ini telah diperbarui untuk memperbaiki kerentanan keamanan.
        </p>

        <ul className="space-y-4 text-gray-900 text-md">
          <li className="flex justify-between">
            <span className="font-semibold">Framework:</span>
            <span className="text-green-700 font-medium">Next.js v15.4.4</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold">Proteksi Clickjacking:</span>
            <span className="text-green-700 font-medium">X-Frame-Options diatur</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold">Content-Security-Policy:</span>
            <span className="text-green-700 font-medium">Sudah dikonfigurasi</span>
          </li>
          <li className="flex justify-between">
            <span className="font-semibold">CORS:</span>
            <span className="text-green-700 font-medium">Dibatasi sesuai asal yang diizinkan</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
