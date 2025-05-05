import './globals.css';

export const metadata = {
  title: 'API Zenith',
  description: 'A Next.js 15 project with Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
