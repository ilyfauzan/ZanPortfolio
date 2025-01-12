import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion"; // Import Framer Motion

export default function About() {
  return (
    <motion.div
     className="bg-black text-white overflow-hidden px-6 mb-8"
      initial={{ opacity: 0, y: 50 }} // Animasi awal
      animate={{ opacity: 1, y: 0 }} // Animasi akhir
      transition={{ duration: 0.8, ease: "easeOut" }} // Durasi animasi
    >
      {/* Konten About Me */}
      <motion.div
        className="relative bg-[#222222]/50 text-center p-6 rounded-md shadow-lg mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Header About Me */}
        <div className="flex justify-center items-center  ">
          <span className="w-16 h-[2px] bg-white"></span>
          <h1 className="px-4 text-2xl font-bold">About Me</h1>
          <span className="w-16 h-[2px] bg-white"></span>
        </div>

        {/* Deskripsi */}
        <p className="text-lg leading-relaxed">
          Mahasiswa semester 6 Jurusan Sistem Informasi di Universitas Hasanuddin
          dengan minat di bidang front-end development. Menguasai HTML, CSS,
          JavaScript, dan framework seperti React, saya juga berpengalaman dalam
          mengembangkan aplikasi web responsif dan user-friendly. Saya berkomitmen
          untuk terus mengembangkan keterampilan teknis dan siap berkontribusi dalam
          proyek-proyek pengembangan web.
        </p>
      </motion.div>

      {/* Section Skills */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex justify-center items-center mb-6">
          <span className="w-16 h-[2px] bg-white mr-2"></span>
          <h2 className="text-3xl font-bold ">Skills</h2>
          <span className="w-16 h-[2px] bg-white ml-2"></span>
        </div>

        {/* Swiper Slider for Mobile */}
        <div className="block md:hidden">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="w-full max-w-md mx-auto relative"
            style={{
              "--swiper-navigation-color": "#ffffff",
              "--swiper-navigation-size": "24px",
            }}
          >
            {[
              { src: "/bootstrap-icon.png", alt: "Bootstrap" },
              { src: "/js-icon.png", alt: "JavaScript" },
              { src: "/python-icon.png", alt: "Python" },
              { src: "/figma-icon.png", alt: "Figma" },
              { src: "/react-icon.png", alt: "React" },
              { src: "/tailwind-icon.png", alt: "React" },
              { src: "/git-icon.png", alt: "Git" },
              { src: "/css-icon.png", alt: "CSS" },
              { src: "/canva-icon.png", alt: "Canva" },
            ].map((skill, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center h-48">
                <motion.div
                  className="flex justify-center items-center h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img src={skill.src} alt={skill.alt} className="w-24 h-24" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Swiper Slider for Desktop */}
        <div className="hidden md:block">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="w-full max-w-4xl mx-auto relative"
            slidesPerView={4}
            spaceBetween={24}
            style={{
              "--swiper-navigation-color": "#ffffff",
              "--swiper-navigation-size": "24px",
            }}
          >
            {[
              { src: "/bootstrap-icon.png", alt: "Bootstrap" },
              { src: "/js-icon.png", alt: "JavaScript" },
              { src: "/python-icon.png", alt: "Python" },
              { src: "/figma-icon.png", alt: "Figma" },
              { src: "/react-icon.png", alt: "React" },
              { src: "/tailwind-icon.png", alt: "React" },
              { src: "/git-icon.png", alt: "Git" },
              { src: "/css-icon.png", alt: "CSS" },
              { src: "/canva-icon.png", alt: "Canva" },
            ].map((skill, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center h-48 group">
                <motion.div
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className="w-32 h-32 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
                  <span className="mt-3 text-sm font-medium text-gray-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                    {skill.alt}
                  </span>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </motion.div>
  );
}
