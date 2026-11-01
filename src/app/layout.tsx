import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

export const metadata: Metadata = {
  title: 'Ahmed Hussien — Software Engineer & Founder',
  description:
    'Software engineer at Siemens EDA, founder and CTO of Jisr (Egypt equity crowdfunding), and product owner / technical consultant for an oil & gas ERP. C++, Qt, AI agents, full-stack.',
  openGraph: {
    title: 'Ahmed Hussien — Software Engineer & Founder',
    description:
      'Software engineer, founder, and technical leader. Siemens EDA, Jisr, and an oil & gas ERP.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}