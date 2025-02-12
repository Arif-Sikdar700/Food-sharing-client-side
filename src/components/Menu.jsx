import React from "react";

const Menu = () => {
  const menuItems = [
    { 
      name: "Waldorf Salad", 
      description: "Fresh apples, celery and walnuts, dressed in mayonnaise", 
      price: "$3.20",
      image: "https://www.foodiecrush.com/wp-content/uploads/2020/05/Waldorf-Salad-foodiecrush.com-010-683x1024.jpg" // Replace with actual image URL
    },
    { 
      name: "Potato Croquettes", 
      description: "Loaded with bacon, stuffed with lots of cheese", 
      price: "$2.70",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiSeSuZvmG7HsOwmdMz12yqCod_gIE9RHJYw&s" // Replace with actual image URL
    },
    { 
      name: "Garganelli", 
      description: "Portobello mushrooms, truffle oil, parmesan, rich garlic sauce", 
      price: "$4.03",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiSeSuZvmG7HsOwmdMz12yqCod_gIE9RHJYw&s" // Replace with actual image URL
    },
    { 
      name: "Cheesy Macaroni", 
      description: "Onion, oregano, mozzarella, cheese", 
      price: "$4.67",
      image: "https://www.thechunkychef.com/wp-content/uploads/2018/02/Ultimate-Creamy-Baked-Mac-and-Cheese-feat-1-440x500.jpg" // Replace with actual image URL
    },
    { 
      name: "Gado-gado", 
      description: "Peanut sauce, spinach, cabbage, bean sprout, corn", 
      price: "$3.52",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Gado_gado_jakarta.jpg" // Replace with actual image URL
    },
    { 
      name: "Chicken Pizza", 
      description: "Chicken, cheese, thin bacon, corn", 
      price: "$3.22",
      image: "https://www.allrecipes.com/thmb/qZ7LKGV1_RYDCgYGSgfMn40nmks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg" // Replace with actual image URL
    },
    { 
      name: "Chicken Escalope", 
      description: "Crisp skin, aversion ginger, chicken breast, coleslaw", 
      price: "$1.65",
      image: "https://api.americangarden.us/recipes/chicken-escalope/chicken-scalope-jpg/" // Replace with actual image URL
    },
    { 
      name: "Risotto", 
      description: "White wine, saffron, feta, parmesan cheese, butter", 
      price: "$9.00",
      image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/mushroom-risotto.jpg" // Replace with actual image URL
    },
   
    
  ];

  return (
    <div className="bg-gray-50 p-6 my-7">
      <h1 className="text-3xl font-bold text-center mb-4">Our Flavorful Menus</h1>
      <p className="text-center text-sm text-gray-500 mb-8">
        Gda Nedi Ugiu Cemenda Gda Laemen And Ligibilis, Naga Ornna
        <br />
        Lorem Gdaemua Gemenan Nisi Gule
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-start gap-4 border-b border-gray-200 pb-4">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-16 h-16 object-cover rounded-md" 
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
            <p className="font-bold text-gray-800">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

