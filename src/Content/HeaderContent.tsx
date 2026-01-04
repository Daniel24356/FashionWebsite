import { Search, Heart, ShoppingCart, Menu } from "lucide-react";


const HeaderContent = () => {
    return(
        <>
        <nav className="w-full bg-white flex justify-between px-20 py-5">
            <div className="text-xl font-bold">URBNMIND</div>
            <div className="hidden md:flex items-center gap-10 text-sm font-medium">
                <p>Home</p>
                <p>PRICING</p>
                <p>Shops</p>
                <p>Custom wears</p>
                <p>Contact</p>
            </div>
            <div className="flex items-center gap-5">
                <Search />
                <Heart />
                <ShoppingCart />
                <button>Buy Now</button>
                <Menu />
            </div>
        </nav>
        </>
    )
}

export default HeaderContent;