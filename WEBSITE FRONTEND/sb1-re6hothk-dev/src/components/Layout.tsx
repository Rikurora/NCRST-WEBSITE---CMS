import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ArrowUp } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <button
        onClick={handleScrollTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 bg-ncrst-blue text-white p-3 rounded-full shadow-lg hover:bg-ncrst-green transition-colors"
        style={{ outline: "none" }}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default Layout;
