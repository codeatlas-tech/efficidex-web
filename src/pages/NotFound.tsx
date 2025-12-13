import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = "404 — Page Not Found";
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-1 flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-center"
                >
                    <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
                    <p className="text-lg text-muted-foreground mb-8">
                        The page you’re looking for doesn’t exist.
                    </p>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-lg"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Back to Home
                    </Link>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default NotFound;
