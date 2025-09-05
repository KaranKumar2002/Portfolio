import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-16">
      
      {/* Copyright */}
      <p className="mt-4 text-center text-sm">
        Copyright © 2025. All rights reserved.
      </p>

      {/* Social Icons */}
      <div className="flex items-center gap-5 mt-6">
        {[
          {
            href: "http://www.linkedin.com/in/karankr21", // 🔗 LinkedIn link
            icon: (
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
            ),
          },
          {
            href: "https://github.com/KaranKumar2002", // 🔗 GitHub link
            icon: (
              <>
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </>
            ),
          },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-[#FF0066] transition-colors duration-300 hover:-translate-y-1"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400 hover:text-white transition"
            >
              {item.icon}
            </svg>
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
