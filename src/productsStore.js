const productsArray = [
  {
    id: "price_1MnMkIAHdwK4regnCKtmUvHX",
    name: "Lipstick",
    href: "#",
    imageSrc: "/Images/lipstick.png",
    imageAlt: "Picture of Lipstick",
    description:
      "Keep your lip colour between the lines and avoid smudging and feathering your lips",
    price: "4.99",
  },
  {
    id: "price_1MnMm0AHdwK4regnOFLGOPKd",
    name: "Nail polish",
    href: "#",
    imageSrc: "/Images/nailpolish.png",
    imageAlt: "Picture of Nail polish",
    description:
      "Gel Nail Color has a curved brush giving you precision in your application. Achieve rich colour and high shine.",
    price: "2.99",
  },
  {
    id: "price_1MnMn9AHdwK4regnbRhGMkII",
    name: "Foundation",
    href: "#",
    imageSrc: "/Images/foundation.png",
    imageAlt: "Picture of Makeup Foundation",
    description:
      "Up to 24 hours of medium to full matte coverage. Non stop comfort, weightless feel. Resists sweat, water and transfer. No caking, no patchiness.",
    price: "9.99",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  // if (productData == undefined) {
  //   console.log("Product data not found for product ID: " + id);
  //   return undefined;
  // }

  return productData;
}

export { productsArray, getProductData };
