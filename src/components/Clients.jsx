import React from "react";

const Clients = () => {
  const clientLogos = [
    {
      name: "Healthy Food",
      logo: "https://static.vecteezy.com/system/resources/thumbnails/011/410/918/small/healthy-food-logo-template-vector.jpg", // Replace with the actual logo URL
    },
    {
      name: "Nice Resto",
      logo: "https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png", // Replace with the actual logo URL
    },
    {
      name: "Good Food",
      logo: "https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg", // Replace with the actual logo URL
    },
    {
      name: "Season Food",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbeV3QmJd1q2BU89YR8PoWG0xQvkpsn1h8w&s", // Replace with the actual logo URL
    },
    {
      name: "Speedy Fork",
      logo: "https://www.shutterstock.com/image-vector/speedy-fork-iconic-logo-design-260nw-235898683.jpg", // Replace with the actual logo URL
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Our Clients</h2>
      <div className="flex justify-center items-center space-x-6">
        {clientLogos.map((client, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={client.logo}
              alt={client.name}
              className="w-16 h-16 object-contain"
            />
            <p className="text-sm text-gray-600 mt-2">{client.name}</p>
          </div>
        ))}
      </div>
      {/* Optional Pagination */}
      <div className="flex justify-center mt-6">
        <span className="h-2 w-2 bg-red-500 rounded-full mx-1"></span>
        <span className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
      </div>
    </div>
  );
};

export default Clients;
