interface AuctionCardProps {
    title: string;
    description: string;
    price: number;
  }
  
  export default function AuctionCard({ title, description, price }: AuctionCardProps) {
    return (
      <div className="border rounded-lg shadow p-4 hover:shadow-lg transition">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="mt-2 text-green-600 font-bold">{price} PLN</div>
      </div>
    );
  }
  