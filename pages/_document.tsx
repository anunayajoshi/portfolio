import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const script = document.createElement('script');
              script.src = 'https://cdn.jsdelivr.net/gh/CINTELLILABS/bland-client-js-sdk@main/dist/lib/chat-widget.js';
              script.defer = true;
              document.body.appendChild(script);
              
              window.BLAND_CHAT_CONFIG = {
                apiKey: "demo-api-key",
                pathwayId: "d560151c-6712-4c7b-87cf-4747fcf98daf",
                position: "bottom-right",
                offset: { x: 20, y: 20 },
                primaryColor: "#151515",
                buttonBackgroundColor: "#151515",
                headerBackgroundColor: "#151515",
                chatTitle: "Bland Chat Support"
              };
            `
          }}
        />
      </body>
    </Html>
  )
}
