import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          Web Simulasi Skripsi
        </h1>
        <p className="text-lg mb-6 text-center">
          Website ini digunakan untuk pembuktian perbaikan kerentanan.
        </p>
        <ul className="list-disc list-inside space-y-2 text-md">
          <li>
            Menggunakan <span className="font-semibold">Next.js v13.4.19</span>
          </li>
          <li>
            Header proteksi <strong>X-Frame-Options</strong> <span className="text-red-600 font-semibold">tidak diatur</span>
          </li>
          <li>
            Header <strong>Content-Security-Policy (CSP)</strong> <span className="text-red-600 font-semibold">tidak diatur</span>
          </li>
          <li>
            Access-Control-Allow-Origin: <span className="font-semibold text-yellow-600">*</span>
          </li>
        </ul>
      </div>
    </main>
  );
}