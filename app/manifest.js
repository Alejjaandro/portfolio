export default function manifest() {
  return {
    name: 'Alejandro Olaso Portfolio',
    short_name: 'AO Portfolio',
    description:
      'Full-Stack Developer specialized in Angular, Node.js, B2B platforms, e-commerce, data automation and cloud-native deployments.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
