import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AfroFest 2024 - KL',
  description: 'KL AfroFest 2024 is a celebration of African culture.',
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
