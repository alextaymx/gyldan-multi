import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "./globals.css";

export const metadata = {
  title: "GYLDAN - Building Integrated Living, Property & Intelligence Platforms",
  description: "A multi-brand group creating long-term value through focused ventures and disciplined execution across property, living, technology, and advisory services.",
  keywords: "GYLDAN, property, coliving, real estate, technology, advisory, Malaysia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
