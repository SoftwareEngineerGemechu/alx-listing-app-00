import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

const filters = ["Top Villa", "Self Checkin", "Luxury", "Pet Friendly"];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[url('/hero.jpg')] bg-cover text-white text-center py-24 px-4">
        <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
        <p className="mt-2 text-lg">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filter Section */}
      <section className="flex flex-wrap gap-2 p-4">
        {filters.map((filter, idx) => (
          <span key={idx} className="px-4 py-2 bg-gray-200 rounded-full cursor-pointer text-sm">
            {filter}
          </span>
        ))}
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, idx: number) => (
          <div key={idx} className="border rounded-lg overflow-hidden shadow">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-lg">{property.name}</h2>
              <p className="text-sm text-gray-600">{property.address.city}, {property.address.country}</p>
              <p className="mt-2 text-gray-800 font-semibold">${property.price}</p>
              <p className="text-sm text-yellow-500">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
