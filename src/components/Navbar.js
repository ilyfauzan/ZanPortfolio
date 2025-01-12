import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter(); // Untuk mendapatkan halaman saat ini

  return (
    <div>
      {/* Bagian atas navbar (tetap di atas untuk semua ukuran layar) */}
      <div className="flex justify-between items-center p-5 bg-black text-white">
        {/* Nama */}
        <h1 className="text-2xl font-bold text-blue-500">AhmadFauzhan</h1>

        {/* Menu navigasi untuk desktop */}
        <nav className="md:flex hidden justify-center space-x-6 -ml-16 mr-11 bg-black text-white">
          {[
            { name: "HOME", href: "/#hero" }, // Menuju ID #hero
            { name: "ABOUT", href: "/about" },
            { name: "PROJECTS", href: "/projects" },
          ].map((item) => (
            <span
              key={item.name}
              className="relative group cursor-pointer"
            >
              <Link href={item.href}>
                <span
                  className={`hover:text-gray-400 ${
                    router.asPath === item.href ? "text-blue-500" : ""
                  }`}
                >
                  {item.name}
                </span>
              </Link>
              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-blue-500 transition-all duration-300 ${
                  router.asPath === item.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </span>
          ))}
        </nav>

        {/* Ikon GitHub */}
        <a
          href="https://github.com/ilyfauzan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/github-icon.png"
            alt="GitHub"
            className="w-10 h-10 hover:opacity-75"
          />
        </a>
      </div>

      {/* Menu navigasi untuk mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-black text-white">
        <div className="flex justify-around text-xl py-4">
          {[
            { name: "HOME", href: "/#hero" }, // Menuju ID #hero
            { name: "ABOUT", href: "/about" },
            { name: "PROJECTS", href: "/projects" },
          ].map((item) => (
            <Link key={item.name} href={item.href}>
              <span
                className={`hover:text-gray-400 cursor-pointer ${
                  router.asPath === item.href ? "text-blue-500" : ""
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
