import { Instagram, Facebook, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-20">

        {/* Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* Brand / Newsletter */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide">
              URBNMIND
            </h3>

            <p className="mt-6 text-sm font-medium">
              Stay Connected. Stay Stylish.
            </p>

            <p className="mt-4 text-sm text-gray-300 leading-relaxed max-w-xs">
              Join Our Community And Never Miss Out On The Latest Drops,
              Exclusive Offers, And Streetwear Inspiration. Follow Us On
              Social Media.
            </p>

            {/* Email Input */}
            <input
              type="email"
              placeholder="Your Email"
              className="mt-6 w-full rounded-full bg-[rgb(64,64,64)] px-5 py-3 text-sm text-white placeholder-gray-300 outline-none"
            />

            {/* Button */}
            <button className="mt-4 rounded-full bg-white px-8 py-2 text-sm font-semibold text-black">
              Join Now
            </button>

            {/* Socials */}
            <div className="mt-10 flex items-center gap-6">
              <Instagram className="w-6 h-6" />
              <Facebook className="w-6 h-6" />
              <X className="w-6 h-6" />
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              Information
            </h4>

            <ul className="space-y-4 text-sm text-gray-300">
              <li>About</li>
              <li>Locations</li>
              <li>Investors</li>
              <li>Shops</li>
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              Help Center
            </h4>

            <ul className="space-y-4 text-sm text-gray-300">
              <li>FAQ</li>
              <li>Terms and Condition</li>
              <li>Private Policies</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              Contact Us
            </h4>

            <p className="text-sm text-gray-300">
              Customercare@gmail.com
            </p>

            <p className="mt-4 text-sm text-gray-300">
              +2347047157650
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-400">
            © 2025 YourBrand. All Rights Reserved. Crafted With Style And Passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
