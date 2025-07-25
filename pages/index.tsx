import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Web Simulasi Skripsi</h1>
      <p>Website ini digunakan untuk pembuktian perbaikan kerentanan.</p>
      <ul>
        <li>Menggunakan Next.js v13.4.19</li>
        <li>Header proteksi clickjacking (X-Frame-Options) <strong>tidak diatur</strong></li>
        <li>Header Content-Security-Policy (CSP) <strong>tidak diatur</strong></li>
        <li>Access-Control-Allow-Origin bernilai: <strong>*</strong></li>
      </ul>
    </main>
  );
}
