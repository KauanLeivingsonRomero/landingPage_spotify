import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-main text-white font-sans h-screen w-screen">{children}</body>
    </html>
  );
}
