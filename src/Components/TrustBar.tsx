import {
  Lock,
  Truck,
  Headphones,
  RotateCcw
} from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Secure Checked",
    description: "Shop with confidence—your payments are fully protected.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Get your skincare essentials delivered quickly and right on time.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Got questions? Our support team stays on, 24/7",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description:
      "If it doesn’t hit right, send it back—easy and fast.",
  },
];

export default function TrustBar() {
  return (
    <section className="w-full bg-[rgba(232,234,234,1)] py-8">
      <div className="max-w-7xl mx-auto px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-1"
              >
                <Icon className="h-7 w-7 text-black" />
                <h3 className="text-sm font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 max-w-xs">
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
