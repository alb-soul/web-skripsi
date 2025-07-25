import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full border border-gray-300">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Web Simulasi Skripsi
        </h1>

        <p className="text-gray-700 text-lg mb-4 text-center">
          Website ini digunakan untuk pembuktian perbaikan kerentanan.
        </p>

        <ul className="space-y-3 text-gray-800 text-md">
          <li className="flex items-start">
            <span className="font-semibold w-60">Framework:</span>
            <span className="text-blue-700">Next.js v13.4.19</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold w-60">Proteksi Clickjacking:</span>
            <span className="text-red-600 font-medium">Tidak diatur (X-Frame-Options)</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold w-60">Content-Security-Policy:</span>
            <span className="text-red-600 font-medium">Tidak diatur</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold w-60">Access-Control-Allow-Origin:</span>
            <span className="text-yellow-600 font-medium">*</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
