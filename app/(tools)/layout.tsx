import Footer from "../components/Footer";

export default function QRToolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="mt-16 sm:mt-20 mb-10 grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {children}
            </main>
            <Footer />
        </div>
    );
}
