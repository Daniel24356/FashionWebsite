import { Search, Heart, ShoppingCart, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white ">
      <div className="max-w-7xl mx-auto px-20">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="text-xl font-bold tracking-wide">
            URBNMIND
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#" className="hover:text-gray-600">HOME</a>
            <a href="#" className="hover:text-gray-600">PRICING</a>
            <a href="#" className="hover:text-gray-600">SHOPS</a>
            <a href="#" className="hover:text-gray-600">CUSTOM WEARS</a>
            <a href="#" className="hover:text-gray-600">CONTACT</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            <Search className="w-5 h-5 cursor-pointer" />
            <Heart className="w-5 h-5 cursor-pointer" />
            <ShoppingCart className="w-5 h-5 cursor-pointer" />

            <button className="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition">
              Buy Now
            </button>

            {/* Mobile Menu */}
            <Menu className="md:hidden w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}
