"use client";

import { IconMail, IconBrandWhatsapp } from "@tabler/icons-react";

export default function ContactSection() {
  return (
    <section
      className="h-auto py-20 px-6 bg-gradient-to-br bg-black"
      id="Contact"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Get In <span className="text-blue-500">Touch</span>
        </h2>
        <p className="text-md md:text-lg text-gray-300 mb-10">
          Reach out to us through your preferred method below. We’re here to
          help with any questions or inquiries.
        </p>

        {/* Contact Options */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* Email Option */}
          <a
            href="mailto:salini.herath*@gmail.com"
            className="w-full sm:w-auto flex items-center gap-4 px-6 py-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
          >
            <IconMail size={32} />
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-semibold">Email Us</h3>
              <span className="text-sm md:text-base text-gray-200">
                salini.herath*@gmail.com
              </span>
            </div>
          </a>

          {/* WhatsApp Option */}
          <a
            href="https://wa.me/+94742674802"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center gap-4 px-6 py-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
          >
            <IconBrandWhatsapp size={32} />
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-semibold">
                Chat on WhatsApp
              </h3>
              <span className="text-sm md:text-base text-gray-200">
                +94 742674802
              </span>
            </div>
          </a>
        </div>

        {/* Decorative Globe Section */}
        <div className="mt-12 flex justify-center"></div>
      </div>
    </section>
  );
}
