import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

export default function Hero() {
  const [text, setText] = useState(""); // Untuk teks yang ditampilkan
  const [isDeleting, setIsDeleting] = useState(false); // Apakah sedang menghapus
  const [loop, setLoop] = useState(0); // Untuk melacak loop keberapa
  const [speed, setSpeed] = useState(150); // Kecepatan animasi
  const words = ["Front-End Developer", "Tech Enthusiast"]; // Kata-kata yang akan dianimasikan

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loop % words.length]; // Ambil kata saat ini
      if (isDeleting) {
        // Jika sedang menghapus
        setText((prev) => prev.slice(0, prev.length - 1)); // Hapus satu karakter
        setSpeed(50); // Kecepatan menghapus lebih cepat
      } else {
        // Jika sedang mengetik
        setText((prev) => currentWord.slice(0, prev.length + 1)); // Tambahkan satu karakter
        setSpeed(150); // Kecepatan mengetik
      }

      // Jika selesai mengetik
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Tunggu 1 detik sebelum menghapus
      }

      // Jika selesai menghapus
      if (isDeleting && text === "") {
        setIsDeleting(false); // Berhenti menghapus
        setLoop((prev) => prev + 1); // Lanjut ke kata berikutnya
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loop]);

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] bg-black text-white pt-10"
      initial={{ opacity: 0, y: 50 }} // Awal animasi (invisible dan turun 50px)
      animate={{ opacity: 1, y: 0 }} // Akhir animasi (visible dan naik ke posisi semula)
      transition={{ duration: 1, ease: "easeOut" }} // Durasi 1 detik
    >
      {/* Foto Profil */}
      <motion.div
        className="relative rounded-full overflow-hidden w-60 h-60 mb-6 md:mb-0 ring-1 ring-blue-500 shadow-[0_0_20px_5px_rgba(59,130,246,0.5)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img
          src="/zan-profil.png"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Teks Hero */}
      <motion.div
        className="text-center md:text-left md:ml-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h2 className="text-lg">HELLO &lt;/&gt;</h2>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          I'm Ahmad Fauzhan Ramadhan
        </h1>
        <div className="relative mt-2 text-xl md:text-2xl font-mono">
          <span className="text-blue-500">{text}</span>
          <span className="border-r-2 border-white animate-blink"></span>
        </div>
        <p className="text-lg mt-1">Welcome to my world!</p>
        <div className="flex justify-center md:justify-start space-x-6 mt-4">
          <a href="https://instagram.com/znfaauzan" target="_blank" rel="noopener noreferrer">
            <img
              src="/instagram-icon.png"
              alt="Instagram"
              className="w-6 h-6 hover:opacity-75"
            />
          </a>
          <a href="https://wa.me/6281243096168" target="_blank" rel="noopener noreferrer">
            <img
              src="/whatsapp-icon.png"
              alt="WhatsApp"
              className="w-6 h-6 hover:opacity-75"
            />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
