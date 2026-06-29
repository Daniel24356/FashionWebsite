import { useState } from "react";
import { Heart, Menu, Search, ShoppingCart, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["HOME", "PRICING", "SHOPS", "CUSTOM WEARS", "CONTACT"];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="text-lg font-bold tracking-wide sm:text-xl">
            URBNMIND
          </div>

          <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="hover:text-gray-600">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <button
              aria-label="Search"
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-gray-100"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              aria-label="Wishlist"
              className="hidden h-9 w-9 place-items-center rounded-full hover:bg-gray-100 sm:grid"
            >
              <Heart className="h-5 w-5" />
            </button>
            <button
              aria-label="Cart"
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-gray-100"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>

            <button className="hidden items-center justify-center rounded-md bg-black px-6 py-2 text-sm font-medium text-white transition hover:bg-gray-800 md:inline-flex">
              Buy Now
            </button>

            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
              className="grid h-9 w-9 place-items-center rounded-full bg-black text-white md:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4 text-sm font-semibold">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="rounded-xl px-4 py-3 transition hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="mt-2 rounded-xl bg-black px-4 py-3 text-left text-sm font-semibold text-white">
              Buy Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
