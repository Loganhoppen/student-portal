import { Inter } from 'next/font/google';
import './globals.css';

/**
 * @file layout.js
 * @description This file defines the root layout of the application, including global styles and metadata.
 * @date 2000-11-14
 * @autor Logan Hoppen
 */

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'New Generation High School Student Portal',
  description: 'A portal to manage student information for New Generation High School',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
