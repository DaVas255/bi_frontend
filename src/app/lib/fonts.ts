import localFont from 'next/font/local';

const nekstFont = localFont({
  src: [
    {
      path: './../assets/styles/fonts/Nekst-Thin.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Black.woff2',
      weight: '900',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Black.woff',
      weight: '100',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Light.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Medium.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-SemiBold.woff',
      weight: '600',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Bold.woff',
      weight: '700',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Black.woff',
      weight: '900',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './../assets/styles/fonts/Nekst-Black.ttf',
      weight: '900',
      style: 'normal'
    }
  ],
  variable: '--font-nekst',
  display: 'swap',
  fallback: ['Optima', 'Arial', 'sans-serif']
})

export { nekstFont };

