/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tidak menambahkan header keamanan
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          }
          // Tidak menambahkan X-Frame-Options dan CSP di sini
        ]
      }
    ];
  }
};

module.exports = nextConfig;
