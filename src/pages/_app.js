import Navbar from "../components/Navbar";
import "../styles/globals.css"; // Pastikan ini sesuai dengan file Tailwind CSS Anda

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar global */}
      <Navbar />
      {/* Konten halaman */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
