export const metadata = {
  title: "Top English Premier League Teams",
  description: "This website is for football purposes",
};

import "./style.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
