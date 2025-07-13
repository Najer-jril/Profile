function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Jeril Arga</h1>
        <p className="text-lg md:text-xl">Frontend Developer & Crypto Trader</p>
      </section>

      {/* Tentang Saya */}
      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Tentang Saya</h2>
        <p>Saya adalah seorang pengembang web yang fokus pada React dan Laravel, serta aktif di dunia crypto sebagai trader teknikal.</p>
      </section>

      {/* Tools */}
      <section className="p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center">Tech Stack</h2>
        <div className="flex justify-center flex-wrap gap-4">
          {["React", "Laravel", "Tailwind", "TradingView", "Binance API"].map(tool => (
            <span key={tool} className="bg-white shadow px-4 py-2 rounded-full">{tool}</span>
          ))}
        </div>
      </section>

      <button className="btn btn-primary">Tombol Utama</button>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placekitten.com/400/300" alt="Kucing" /></figure>
        <div className="card-body">
          <h2 className="card-title">Judul Card</h2>
          <p>Ini konten card menggunakan DaisyUI.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Aksi</button>
          </div>
        </div>
      </div>

      {/* Kontak */}
      <section className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Hubungi Saya</h2>
        <p className="mb-4">Email: jeril@example.com</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
          <a href="#" className="text-blue-500 hover:underline">GitHub</a>
          <a href="#" className="text-blue-500 hover:underline">TradingView</a>
        </div>
      </section>
    </div>
  );
}

export default App;
