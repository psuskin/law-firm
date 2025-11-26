"use client";

import Script from "next/script";

export default function Chatbot() {
  return (
    <Script
      id="jupus-chatbot"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(j,u,p,U,s){j.JUPUS=p;j[p]||(j[p]=function(){
          (j[p].q=j[p].q||[]).push(arguments)});
          U=u.createElement('script');s=u.scripts[0];
          U.src='https://app.jupus.de/channels/ingress/chatbot/embed/51e84032-36c8-4975-ac97-90d818eb8149.js';
          s.parentNode.insertBefore(U,s)}(window,document,'jp');
        `,
      }}
    />
  );
}
