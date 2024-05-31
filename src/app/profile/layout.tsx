import { Header } from "../components/Header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main style={{ maxWidth: '1494px' }} className="m-auto">
            <Header />
            <div>{children}</div>
        </main>
    );
}
