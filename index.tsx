import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Ensure a favicon is present in the document head. This will look for an existing
// <link rel="icon"> (or any rel that contains "icon") and update its href, or
// create one if it doesn't exist. The path used below is /assets/image.png.
const setFavicon = (href: string) => {
  try {
    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = href;
  } catch (e) {
    // If running in an environment without a DOM (SSR), ignore silently
    // so the app can still render.
    // eslint-disable-next-line no-console
    console.warn('Could not set favicon:', e);
  }
};

// Option A (recommended): put the image in public/assets/image.png and use absolute path:
setFavicon('/assets/image.png');

// Option B (if the image is inside src and bundled by the build):
// import favicon from './assets/image.png';
// setFavicon(favicon);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);