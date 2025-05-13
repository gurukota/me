/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: '/me',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
