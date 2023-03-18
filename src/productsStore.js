const productsArray = [
  {
    id: 0,
    name: "Lipstick",
    href: "#",
    imageSrc: "./public/imageSrcSrcs/lipstick.png",
    imageAlt: "Picture of Lipstick",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "£4.99",
  },
  {
    id: 1,
    name: "Nail polish",
    href: "#",
    imageSrc: "./public/imageSrcSrcs/nailpoilish.png",
    imageAlt: "Picture of Nail polish",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "£2.99",
  },
  {
    id: 2,
    name: "Foundation",
    href: "#",
    imageSrc: "./public/imageSrcSrcs/foundation.png",
    imageAlt: "Picture of Makeup Foundation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "£9.99",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data not found for product ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
