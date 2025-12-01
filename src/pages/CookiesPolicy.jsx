import React from "react";

export default function CookiesPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-30 text-slate-800">
      <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>

      <p className="mb-4">
        AstutePro uses cookies to enhance your browsing experience and analyze 
        website performance.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device that help websites 
        remember your preferences.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Types of Cookies We Use</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>Essential Cookies</strong> – required for website functionality</li>
        <li><strong>Analytics Cookies</strong> – used to analyze traffic and improve performance</li>
        <li><strong>Preference Cookies</strong> – save your settings and preferences</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookie Control</h2>
      <p className="mb-4">
        You can disable cookies through your browser settings, but some 
        website features may not function properly.
      </p>
    </div>
  );
}
