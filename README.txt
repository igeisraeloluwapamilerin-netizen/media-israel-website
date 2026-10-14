MEDIA ISRAEL — ADVANCED PORTFOLIO WEBSITE
========================================

WHAT'S INCLUDED
- Responsive portfolio website with a screen-like navigation layout.
- Home, About, Portfolio & Services, Booking, and MediaIsrael AI sections.
- Light blue, white and navy branding; mobile navigation; reduced-motion support.
- Three included image assets used in the website.
- Google Drive portfolio link so you can keep adding examples to your folder.
- Booking form that prepares an email draft; it does not silently send form data.
- MediaIsrael AI chat interface with a useful local demo fallback.
- Optional Node.js/Express backend that connects the chat to the OpenAI API securely.

OPEN THE PREVIEW
Open index.html in a browser. The website and demo chat can be previewed locally.

ACTIVATE LIVE AI (OPTIONAL — REQUIRES YOUR OWN API KEY)
1. Install Node.js 20 or newer on your computer, or choose a hosting provider that supports Node.js.
2. In this folder, copy .env.example to a file named .env.
3. Create an API key in your OpenAI developer account and put it in .env as OPENAI_API_KEY=...
4. Keep .env private. Do not send it to anyone, upload it publicly, or put the key in index.html.
5. Open a terminal in this folder and run: npm install
6. Run: npm start
7. Visit http://localhost:3000. The chat will use the backend when it is available and configured.
8. For a public website, deploy this folder to a Node-compatible host, add OPENAI_API_KEY as a private environment variable in the host dashboard, and use HTTPS. Never commit .env to Git.

COST & SECURITY
- The live AI requires a separate OpenAI API account/key and may incur API usage charges. ChatGPT subscription plans do not automatically include API credits.
- Keep the API key server-side only. The included backend applies a basic per-IP request limit; for a public production launch, configure a stronger shared rate limiter, usage limits/billing alerts, and spam protection.
- Demo chat answers are local sample guidance, not live AI. The site does not pretend that live AI is active until the backend has been configured.

BOOKING FORM
The enquiry form opens the visitor's email app with the details filled in. The visitor still needs to press Send. For a server-submitted form, connect a reputable form service or add a protected backend endpoint.

PORTFOLIO ASSETS
Replace files in assets/ with your own approved photos/videos while preserving filenames, or update their paths in index.html. Current portfolio folder link:
https://drive.google.com/drive/folders/1fTq-BZuGVk4barnL_iPVWIGeNqfQ1qyJ

CONTACT DETAILS USED IN THE WEBSITE
Email: mediaisrael2007@gmail.com
WhatsApp: +234 906 312 0145

This is a website starter package, not a deployed public website. Hosting/domain setup and AI activation require your own accounts and explicit configuration.
