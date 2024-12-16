const products = [
    {
      id: 1,
      name: "Double Sofa",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      price: 200,
      category: "Furniture",
    },
    {
      id: 2,
      name: "Single Sofa",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      price: 150,
      category: "Furniture",
    },
    {
      id: 3,
      name: "Arm Chair",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      price: 100,
      category: "Furniture",
    },
    {
      id: 4,
      name: "Phone Model 01",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      price: 300,
      category: "Electronics",
    },
    {
      id: 5,
      name: "Phone Model 02",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      price: 400,
      category: "Electronics",
    },
    {
      id: 6,
      name: "Wireless Earbuds",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      price: 50,
      category: "Accessories",
    },
    {
      id: 7,
      name: "Smart Watch",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      price: 120,
      category: "Accessories",
    },
    {
      id: 8,
      name: "Gaming Chair",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      price: 250,
      category: "Furniture",
    },
    {
      id: 9,
      name: "Desk Lamp",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      price: 30,
      category: "Accessories",
    },
    {
      id: 10,
      name: "Wireless Keyboard",
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      price: 80,
      category: "Electronics",
    },
  ];
  
  export const fetchProducts = () => {
    // Simulates an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000); // Simulate network delay
    });
  };
  