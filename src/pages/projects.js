import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      className="bg-black text-white min-h-screen px-6 pb-20"
      initial={{ opacity: 0, y: 50 }} // Awal animasi
      animate={{ opacity: 1, y: 0 }} // Akhir animasi
      transition={{ duration: 0.8, ease: "easeOut" }} // Durasi animasi
    >

    <div className="bg-black text-white min-h-screen px-6 py-4">
      {/* Header Projects */}
      <div className="text-center ">
        <div className="flex justify-center items-center mb-4">
          <span className="w-16 h-[2px] bg-white mr-2"></span>
          <h1 className="text-3xl font-bold">My Projects</h1>
          <span className="w-16 h-[2px] bg-white ml-2"></span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Project 1 */}
        <div className="bg-[#222222]/50 p-4 rounded-md shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
          <div>
            <img
              src="/project1.png"
              alt="Mini Ecommerce"
              className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Mini Ecommerce</h3>
            <p className="text-sm text-gray-400">
              Proyek mini ecommerce yang dibangun menggunakan Laravel,
              menunjukkan kemampuan untuk mengembangkan aplikasi web yang
              skalabel dan kaya fitur.
            </p>
          </div>
          <a
            href="https://github.com/ilyfauzan/Mini-Ecommerce"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.33-.27 2.01-.27.68 0 1.37.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Kunjungi GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-[#222222]/50 p-4 rounded-md shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div>
                <div className="overflow-hidden rounded-md mb-4">
                <img
                    src="/project2.png"
                    alt="EcoActivity"
                    className="w-full h-auto object-cover object-top"
                />
                </div>
                <h3 className="text-xl font-semibold mb-2">TrekkerTech</h3>
                <p className="text-sm text-gray-400">
                Aplikasi rekomendasi destinasi wisata yang dibangun untuk membantu
                pengguna menemukan lokasi wisata terbaik dengan fitur-fitur
                unggulan.
                </p>
            </div>
            <a
                href="https://github.com/ilyfauzan/TrekkerTech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center mt-4"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 16 16"
                >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.33-.27 2.01-.27.68 0 1.37.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                Kunjungi GitHub
            </a>
            </div>
        {/* Project 3 */}
        <div className="bg-[#222222]/50 p-4 rounded-md shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
          <div>
            <img
              src="/project3.png"
              alt="Zolve Digital"
              className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Zolve Digital</h3>
            <p className="text-sm text-gray-400">
              Web responsif yang menyediakan template untuk pekerjaan
              administratif, membantu Kamu menghemat waktu, mengurangi kesalahan,
              dan membuat dokumen lebih profesional.
            </p>
          </div>
          <a
            href="https://github.com/ilyfauzan/ZolveDigital"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.33-.27 2.01-.27.68 0 1.37.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Kunjungi GitHub
          </a>
        </div>
        {/* Project 4 */}
            <div className="bg-[#222222]/50 p-4 rounded-md shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div>
                <div className="overflow-hidden rounded-md mb-4">
                <img
                    src="/project4.png"
                    alt="EcoActivity"
                    className="w-full h-40 object-cover object-top"
                />
                </div>
                <h3 className="text-xl font-semibold mb-2">EcoActivity</h3>
                <p className="text-sm text-gray-400">
                Aplikasi yang merekomendasikan jenis kegiatan berdasarkan cuaca. Data
                kegiatan ditraining menggunakan machine learning, dan data cuaca diambil
                secara langsung dari API.
                </p>
            </div>
            <a
                href="https://github.com/ilyfauzan/EcoActivity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center mt-4"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 16 16"
                >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.33-.27 2.01-.27.68 0 1.37.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                Kunjungi GitHub
            </a>
            </div>
        {/* Project 5 */}
        <div className="bg-[#222222]/50 p-4 rounded-md shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
        <div>
            <img
            src="/project5.png"
            alt="Landing Page NFT"
            className="w-full h-auto rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Landing Page NFT</h3>
            <p className="text-sm text-gray-400">
            Landing page sederhana yang dirancang untuk menjelaskan NFT, fitur-fiturnya, dan memungkinkan pengguna untuk memesan NFT dengan antarmuka yang mudah dipahami.
            </p>
        </div>
        <a
            href="https://github.com/ilyfauzan/ilyfauzan.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center mt-4"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 16 16"
            >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.33-.27 2.01-.27.68 0 1.37.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Kunjungi GitHub
        </a>
        </div>
        
      </div>
    </div>
    </motion.div>
  );
}
