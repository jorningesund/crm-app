export const metadata = {
  title: "CRM App",
  description: "Simple CRM",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
