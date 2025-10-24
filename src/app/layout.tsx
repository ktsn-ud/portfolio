import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../index.css';

export const metadata: Metadata = {
    title: "ktsn-ud's portfolio",
    description: 'Welcome to my portfolio website.',
    robots: {
        index: false,
    },
};

const lineSeed = localFont({
    src: [
        {
            path: '../../public/assets/fonts/LINESeedJP_OTF_Rg_subsetted.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/assets/fonts/LINESeedJP_OTF_Bd_subsetted.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/assets/fonts/LINESeedJP_OTF_Eb_subsetted.woff2',
            weight: '800',
            style: 'normal',
        },
    ],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja" className={lineSeed.className}>
            <body className="text-gray-800">
                <div id="root">{children}</div>
                <script
                    defer
                    src="https://static.cloudflareinsights.com/beacon.min.js"
                    data-cf-beacon='{"token": "466fa3cca9ec43a4a864d380524295c8"}'
                ></script>
            </body>
        </html>
    );
}
