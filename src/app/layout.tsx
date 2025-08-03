import type { Metadata } from 'next';
import {
    Geist,
    Geist_Mono,
} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'ParlorHub - Transforme seu salão em uma experiência única',
    description:
        'O primeiro assistente inteligente que transforma cada agendamento em uma oportunidade de encantar. Agendamento automático, análise preditiva e experiência premium.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script src="https://code.iconify.design/iconify-icon/3.0.0/iconify-icon.min.js"></script>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
