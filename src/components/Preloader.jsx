import React, { useEffect, useState } from "react";

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const visited = localStorage.getItem("visited");

    if (!visited) {
      // Show loader for first-time visitors
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("visited", "true");
      }, 2500); // 2.5 seconds

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  if (!loading) return null;

  return (
   <div className={`fixed inset-0 bg-black/70 flex flex-col items-center justify-center z-[1000] transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Spinner */}
      <div className="w-20 h-20 border-4 border-t-4 border-emerald-400 border-t-transparent rounded-full animate-spin mb-6"></div>
      
      {/* Optional Logo/Text */}
      <img src="/Logo.png" alt="Logo" className="w-24 mb-2" />
      <p className="text-white font-semibold text-lg animate-pulse">Loading ASTUTEPRO...</p>
    </div>
  );
}

export default Preloader;
