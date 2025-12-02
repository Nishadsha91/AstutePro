import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [hideAnimation, setHideAnimation] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // track scroll direction

  useEffect(() => {
    const toggle = () => {
      const currentScroll = window.scrollY;

      // SCROLLING DOWN → show button, never hide
      if (currentScroll > lastScrollY) {
        if (currentScroll > 300) {
          setVisible(true);
          setHideAnimation(false);
        }
      } 
      // SCROLLING UP → hide button
      else {
        if (currentScroll < 300 && visible) {
          setHideAnimation(true);
          setTimeout(() => setVisible(false), 300);
        }
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, [lastScrollY, visible]);

  const scrollToTop = () => {
    setHideAnimation(true);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setVisible(false);
    }, 300);
  };

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(20px); }
        }
        .slide-up { animation: slideUp 0.3s ease-out forwards; }
        .slide-down { animation: slideDown 0.3s ease-out forwards; }
      `}</style>

      {visible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-6 right-6 z-50
            bg-emerald-600 text-white p-3 rounded-full shadow-lg
            transition-all duration-300
            hover:bg-emerald-700 hover:shadow-emerald-500/40 hover:scale-110
            ${hideAnimation ? "slide-down" : "slide-up"}
          `}
        >
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
}
