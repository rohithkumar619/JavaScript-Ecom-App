const products = [
  {
    productName: "Advanced Calculus Textbook",
    price: 49.99,
    description: "A comprehensive guide to calculus for engineering students.",
    photoAddress:
      "https://m.media-amazon.com/images/I/4129eyCU90L._AC_UF1000,1000_QL80_.jpg",
    type: "b-tech",
  },
  {
    productName: "Mechanical Engineering Drawing Kit",
    price: 25.5,
    description: "Complete drawing kit for mechanical engineering students.",
    photoAddress: "https://m.media-amazon.com/images/I/81xHulEh1WL.jpg",
    type: "mechanical",
  },
  {
    productName: "Laptop Backpack",
    price: 39.99,
    description: "Durable backpack with padded laptop compartment.",
    photoAddress:
      "https://m.media-amazon.com/images/I/81nqBpHhcWL._AC_UY1100_.jpg",
    type: "laptop",
  },
  {
    productName: "Physics Lab Equipment",
    price: 89.99,
    description: "Essential lab equipment for physics experiments.",
    photoAddress:
      "https://www.aticoindia.com/uploads/product_images/757265physics-lab-equipment-500x500.jpg",
    type: "b-tech",
  },
  {
    productName: "Mechanical Workshop Tools",
    price: 55.0,
    description: "Set of tools for mechanical workshop practice.",
    photoAddress:
      "https://5.imimg.com/data5/SELLER/Default/2020/10/VU/KH/AG/12291864/iti-engineering-equipments-500x500.jpg",
    type: "mechanical",
  },
  {
    productName: "Software Development Book",
    price: 34.95,
    description: "A comprehensive book on software development practices.",
    photoAddress:
      "https://m.media-amazon.com/images/I/71hshPt4mJL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
    type: "computer-science",
  },
  {
    productName: "Civil Engineering Survey Kit",
    price: 75.0,
    description: "Complete survey kit for civil engineering students.",
    photoAddress:
      "https://5.imimg.com/data5/SELLER/Default/2023/8/335074315/KE/AO/YZ/2427214/road-survey-equipment.jpg",
    type: "civil",
  },
  {
    productName: "Graphing Calculator",
    price: 69.99,
    description:
      "High-performance graphing calculator for math and engineering.",
    photoAddress:
      "https://m.media-amazon.com/images/I/61R5JMj3FYL._AC_UF1000,1000_QL80_.jpg",
    type: "calculator",
  },
  {
    productName: "Chemistry Lab Set",
    price: 95.99,
    description: "Complete set for chemistry lab experiments.",
    photoAddress:
      "https://images-cdn.ubuy.co.in/635a3c53be7da14528677e6b-tn-lab-glassware-15-piece-kit-chemistry.jpg",
    type: "b-tech",
  },
  {
    productName: "Mechanical Engineering Handbook",
    price: 45.0,
    description:
      "Detailed handbook for mechanical engineering principles and practices.",
    photoAddress:
      "https://m.media-amazon.com/images/I/51YBGtP1L0L._AC_UF1000,1000_QL80_.jpg",
    type: "mechanical",
  },
  {
    productName: "Drawing Tablet",
    price: 149.99,
    description: "Digital drawing tablet for design and art students.",
    photoAddress: "https://m.media-amazon.com/images/I/712KXxR0yxL.jpg",
    type: "tablet",
  },
  {
    productName: "Electrical Circuit Kit",
    price: 65.0,
    description:
      "Educational kit for building and understanding electrical circuits.",
    photoAddress:
      "https://m.media-amazon.com/images/I/41c0ENwlkdL._AC_UF1000,1000_QL80_.jpg",
    type: "electrical",
  },
  {
    productName: "Business Management Textbook",
    price: 55.0,
    description: "Comprehensive textbook on business management.",
    photoAddress:
      "https://m.media-amazon.com/images/I/418Nz9kNZVL._AC_UF1000,1000_QL80_.jpg",
    type: "business",
  },
  {
    productName: "Environmental Engineering Guide",
    price: 48.5,
    description:
      "Guide to principles and practices in environmental engineering.",
    photoAddress:
      "https://m.media-amazon.com/images/I/81zWHugf7uL._AC_UF1000,1000_QL80_.jpg",
    type: "environmental",
  },
  {
    productName: "Thermodynamics Textbook",
    price: 52.99,
    description: "Essential thermodynamics textbook for engineering students.",
    photoAddress:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSV6qfMx_URl9A7VhSRTfJb7L8Lll7r1M10YR869tA3Q&s",
    type: "b-tech",
  },
  {
    productName: "Mechanical Design Software",
    price: 199.99,
    description: "Software for advanced mechanical design and simulations.",
    photoAddress:
      "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2022/05/Most%20Trending%20Mechanical%20Engineering%20Design%20Softwares%20in%202022%203_1652969207.jpg",
    type: "mechanical",
  },
  {
    productName: "Economics Book for Engineers",
    price: 40.0,
    description: "Introduction to economics tailored for engineering students.",
    photoAddress:
      "https://m.media-amazon.com/images/I/61mUq3QcrrL._AC_UF1000,1000_QL80_.jpg",
    type: "b-tech",
  },
  {
    productName: "Architectural Design Tools",
    price: 120.0,
    description: "Complete set of tools for architectural design students.",
    photoAddress:
      "https://www.shutterstock.com/shutterstock/photos/1302691909/display_1500/stock-vector-architect-tool-icons-set-simple-set-of-architect-tool-vector-icons-for-web-design-on-white-1302691909.jpg",
    type: "architecture",
  },
  {
    productName: "Programming Laptop",
    price: 999.99,
    description:
      "High-performance laptop ideal for programming and development.",
    photoAddress:
      "https://cdn-media-1.freecodecamp.org/images/8HXfTyW1Mmvq9vxU3rlJp2XCVlbP1Kc7Wu1F",
    type: "computer-science",
  },
  {
    productName: "Structural Engineering Software",
    price: 450.0,
    description:
      "Advanced software for structural engineering analysis and design.",
    photoAddress:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97jkdNgKuHL99mNqsF_qmVtNbsJ8Rt2kdxD-s4uNfgg&s",
    type: "civil",
  },
  {
    productName: "Robotics Kit",
    price: 150.0,
    description: "Complete robotics kit for hands-on learning.",
    photoAddress:
      "https://static.generation-robots.com/img/products/robotis-engineer-kit/ROBOTIS_ENGINEER_KIT_2_INTL_ROBOTIS_ENGINEER_KIT_ROBOTIS-2.jpg",
    type: "b-tech",
  },
  {
    productName: "Data Science Handbook",
    price: 65.0,
    description:
      "Comprehensive handbook on data science principles and practices.",
    photoAddress:
      "https://m.media-amazon.com/images/I/41aishgPCnL._AC_UF1000,1000_QL80_.jpg",
    type: "computer-science",
  },
];

function displayProducts(products) {
  const container = document.getElementById("body");
  container.innerHTML = "";
  products.map((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
            <img src="${product.photoAddress}" alt="${product.productName}">
            <h2>${product.productName}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
        `;
    container.appendChild(productElement);
  });
}

displayProducts(products);

function filterProductsByType(type) {
  const filteredProducts = products.filter((product) =>
    product.type.toLowerCase().includes(type.toLowerCase())
  );
  displayProducts(filteredProducts);
}

const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const typeSearchInput = document.getElementById("typeSearch").value;
  filterProductsByType(typeSearchInput);
});
