import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Navbar} from '@/components';


const inter = Inter({ subsets: ["latin"] });

export default function GeneralLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar/>
            <main className="flex flex-col items-center p-24">
                <span className="text-lg">Hola Mundo</span>
                {children}
            </main>
        </>
    );
}
