import { Headphones, Lock, RotateCcw, Truck } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Secure Checked",
    description: "Shop with confidence - your payments are fully protected.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Get your streetwear essentials delivered quickly and right on time.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Got questions? Our support team stays on, 24/7.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "If it does not hit right, send it back - easy and fast.",
  },
];

export default function TrustBar() {
  return (
    <section className="w-full bg-[rgba(232,234,234,1)] py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex min-h-40 flex-col items-center justify-center gap-2 rounded-2xl bg-white/55 px-3 py-5 text-center shadow-sm sm:min-h-36"
              >
                <Icon className="h-7 w-7 text-black" />
                <h3 className="text-sm font-semibold text-black">{item.title}</h3>
                <p className="max-w-xs text-xs leading-5 text-gray-600 sm:text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
