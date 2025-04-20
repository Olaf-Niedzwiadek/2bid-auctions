'use client'; // konieczne, jeśli używasz interakcji (na przyszłość)

import AuctionCard from "@/components/AuctionCard";

export default function AuctionsPage() {
  const sampleAuctions = [
    { title: "iPhone 14", description: "Stan idealny, bez blokady", price: 3200 },
    { title: "Lampa biurowa LED", description: "Nowa, oryginalne opakowanie", price: 150 },
    { title: "Obraz olejny", description: "Reprodukcja, 60x80cm", price: 500 },
  ];

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Aktualne aukcje</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleAuctions.map((auction, idx) => (
          <AuctionCard key={idx} {...auction} />
        ))}
      </div>
    </main>
  );
}
