function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Muhammad Nazril "Najer" Ilham</h1>
          <p className="text-lg md:text-xl">Informatics student</p>
        </div>
      </section>

      {/* Test Section */}
      <section className="bg-yellow-200 text-black py-10 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Tes Tailwind Margin dan Padding</h1>
          <p className="mb-2">Apakah kamu melihat margin dan padding?</p>
        </div>
      </section>

      {/* Tentang Saya */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Tentang Saya</h2>
          <div className="space-y-4">
            <p className="leading-relaxed text-justify text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="leading-relaxed text-justify text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="leading-relaxed text-justify text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 md:px-12 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Tech Stack</h2>
          <div className="flex justify-center flex-wrap gap-4">
            {["React", "Laravel", "Tailwind", "TradingView", "Binance API"].map(tool => (
              <span key={tool} className="bg-white shadow px-6 py-3 rounded-full text-base">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section className="py-20 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Hubungi Saya</h2>
          <p className="mb-6 text-base">Email: <a href="mailto:jeril@example.com" className="text-blue-600 hover:underline">jeril@example.com</a></p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
            <a href="#" className="text-blue-500 hover:underline">GitHub</a>
          </div>
        </div>
      </section>

      <footer className="pb-10 text-center text-sm text-gray-400 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          © {new Date().getFullYear()} Najer — All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
