import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0b0f10] px-6 py-7 text-white">

      <div className="
        mx-auto
        max-w-6xl
        flex
        flex-col
        gap-8
        md:flex-row
        md:items-center
        md:justify-between
      ">

        {/* Brand */}
        <div className="text-center md:text-left">

          <h3 className="text-2xl font-semibold">
            Asad <span className="text-[#20b2a6]">Visuals</span>
          </h3>

          <p className="mt-2 text-sm text-white/50">
            Cinematic Video Editing & Visual Storytelling
          </p>

        </div>



        {/* Social Icons */}
        <div className="flex justify-center gap-4">

          <a
            href="https://www.linkedin.com/in/asad-ahmed-973220423?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            className="
            flex h-11 w-11 items-center justify-center
            rounded-full
            border border-white/10
            bg-white/5
            text-white/70
            transition
            hover:border-[#20b2a6]
            hover:text-[#20b2a6]
            "
          >
            <FaLinkedinIn size={20}/>
          </a>


          <a
            href="https://www.instagram.com/editedbyasad/?utm_source=qr&r=nametag"
            target="_blank"
            rel="noreferrer"
            className="
            flex h-11 w-11 items-center justify-center
            rounded-full
            border border-white/10
            bg-white/5
            text-white/70
            transition
            hover:border-[#20b2a6]
            hover:text-[#20b2a6]
            "
          >
            <FaInstagram size={20}/>
          </a>


          <a
            href="https://wa.me/qr/X7L2LGO7ID7VA1"
            target="_blank"
            rel="noreferrer"
            className="
            flex h-11 w-11 items-center justify-center
            rounded-full
            border border-white/10
            bg-white/5
            text-white/70
            transition
            hover:border-[#20b2a6]
            hover:text-[#20b2a6]
            "
          >
            <FaWhatsapp size={20}/>
          </a>

        </div>

      </div>


      <div className="
        mx-auto mt-8 max-w-6xl
        border-t border-white/10
        pt-5
        text-center
        text-xs
        text-white/40
      ">
        © 2026 Asad Visuals. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;