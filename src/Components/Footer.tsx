import { Facebook, Instagram, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black pb-8 pt-14 text-white sm:pb-10 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-16">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold tracking-wide">URBNMIND</h3>

            <p className="mt-6 text-sm font-medium">
              Stay Connected. Stay Stylish.
            </p>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-300">
              Join Our Community And Never Miss Out On The Latest Drops,
              Exclusive Offers, And Streetwear Inspiration. Follow Us On Social
              Media.
            </p>

            <input
              type="email"
              placeholder="Your Email"
              className="mt-6 w-full rounded-full bg-[rgb(64,64,64)] px-5 py-3 text-sm text-white outline-none placeholder:text-gray-300"
            />

            <button className="mt-4 w-full rounded-full bg-white px-8 py-3 text-sm font-semibold text-black sm:w-auto sm:py-2">
              Join Now
            </button>

            <div className="mt-10 flex items-center gap-6">
              <Instagram className="h-6 w-6" />
              <Facebook className="h-6 w-6" />
              <X className="h-6 w-6" />
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-base font-semibold sm:mb-6 sm:text-lg">
              Information
            </h4>

            <ul className="space-y-4 text-sm text-gray-300">
              <li>About</li>
              <li>Locations</li>
              <li>Investors</li>
              <li>Shops</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-base font-semibold sm:mb-6 sm:text-lg">
              Help Center
            </h4>

            <ul className="space-y-4 text-sm text-gray-300">
              <li>FAQ</li>
              <li>Terms and Condition</li>
              <li>Private Policies</li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="mb-5 text-base font-semibold sm:mb-6 sm:text-lg">
              Contact Us
            </h4>

            <p className="text-sm text-gray-300">Customercare@gmail.com</p>

            <p className="mt-4 text-sm text-gray-300">+2347047157650</p>
          </div>
        </div>

        <div className="mt-14 border-t border-gray-800 pt-6 text-center sm:mt-20">
          <p className="text-xs leading-5 text-gray-400">
            © 2025 YourBrand. All Rights Reserved. Crafted With Style And
            Passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
