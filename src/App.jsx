function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-6 md:px-0 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Muhammad Nazril "Najer" Ilham</h1>
        <p className="text-lg md:text-xl text-center">3rd Backend Developer</p>
      </section>

      {/* Tentang Saya */}
      <section className="py-20 px-6 md:px-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Tentang Saya</h2>
        <p className="leading-relaxed text-justify text-base md:text-lg space-y-4">
          Saya adalah seorang pengembang web dengan fokus pada penggunaan Laravel dan React dalam membangun aplikasi modern, efisien, dan terintegrasi. Saya aktif mengembangkan proyek berbasis REST API dan Single Page Application (SPA), serta terbiasa menggunakan tools seperti Tailwind CSS, Vite, dan DaisyUI untuk mempercepat proses desain antarmuka yang responsif. Dalam beberapa proyek pribadi, saya juga memadukan teknologi backend dan frontend secara seamless dalam struktur monorepo untuk efisiensi pengembangan.
          <br /><br />
          Di luar dunia pengembangan, saya juga mendalami dunia trading cryptocurrency secara serius, terutama melalui pendekatan analisis teknikal. Saya mengandalkan konfirmasi dari multi-timeframe, indikator seperti EMA crossover, auto Fibonacci, dan RSI divergence. Dalam strategi saya, pengambilan keputusan selalu berbasis data, disiplin entry, dan manajemen risiko yang terstruktur. Saya juga telah mulai membangun indikator dan strategi sendiri di TradingView menggunakan Pine Script.
          <br /><br />
          Dengan kombinasi antara kemampuan teknis di bidang pemrograman dan kedisiplinan dalam trading, saya senang belajar hal baru dan membangun sistem yang bisa membantu orang lain menjadi lebih produktif dan terarah. Ke depan, saya ingin terus mengembangkan alat bantu untuk trader dan membangun sistem web yang ringan, scalable, dan mudah digunakan oleh siapa saja.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 md:px-0 bg-gray-100">
        <h2 className="text-2xl font-bold mb-8 text-center">Tech Stack</h2>
        <div className="flex justify-center flex-wrap gap-4">
          {["React", "Laravel", "Tailwind", "TradingView", "Binance API"].map(tool => (
            <span key={tool} className="bg-white shadow px-6 py-3 rounded-full text-base">{tool}</span>
          ))}
        </div>
      </section>

      {/* Showcase Card + Button */}
      <section className="py-20 px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <button className="btn btn-primary px-8 py-3 text-lg">Tombol Utama</button>

          <div className="card w-full md:w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placekitten.com/400/300" alt="Kucing" className="object-cover w-full h-60" /></figure>
            <div className="card-body px-6 py-4">
              <h2 className="card-title mb-2">Judul Card</h2>
              <p className="mb-4">Ini konten card menggunakan DaisyUI.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary px-6">Aksi</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Hubungi Saya</h2>
        <p className="mb-6 text-base">Email: <a href="mailto:jeril@example.com" className="text-blue-600 hover:underline">jeril@example.com</a></p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
          <a href="#" className="text-blue-500 hover:underline">GitHub</a>
          <a href="#" className="text-blue-500 hover:underline">TradingView</a>
        </div>
      </section>

      <footer className="pb-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Najer — All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
