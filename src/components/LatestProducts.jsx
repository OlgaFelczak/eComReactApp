import React from 'react'
// import ProductCard from './ProductCard'
// import products from "../products.json"
// import items from "../items.json" 



// const LatestProducts = (props) => {
//   return (
//     <div className='container'>
//       <h2>Latest Products</h2>
//       <div className='row'>
//         <div className='col-sm'><ProductCard
//         image={products[0].image}
//         title={products[0].title}
//         description={products[0].description}
//         price={products[0].description}
//         /></div>
//         <div className='col-sm'><ProductCard
//         image={products[1].image}
//         title={products[1].title}
//         description={products[1].description}
//         price={products[1].description}
//         /></div>
//         <div className='col-sm'><ProductCard
//         image={products[1].image}
//         title={products[1].title}
//         description={products[1].description}
//         price={products[1].description}
//         /></div>
//       </div>
//     </div>

    
//   )
// }

// export default LatestProducts

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 0,
    name: "Lipstick",
    href: "#",
    imageSrc: "/imageSrcSrcs/lipstick.png",
    imageAlt: "Picture of Lipstick",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "£4.99"
},
{
    id: 1,
    name: "Nail polish",
    href: "#",
    imageSrc: "/imageSrcSrcs/nailpoilish.png",
    imageAlt: "Picture of Nail polish",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "£2.99"
},
{
    id: 2,
    name: "Foundation",
    href: "#",
    imageSrc: "/imageSrcSrcs/foundation.png",
    imageAlt: "Picture of Makeup Foundation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "£9.99"
},
  
  // More products...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
            
            
          ))}
        </div>
      </div>
    </div>
  )
}
