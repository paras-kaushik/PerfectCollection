# Perfect Collection Official Website
(Om Shree Ganesh)
# Features
### Homepage
- Navigation consisting of site sections, signin, search and cart
  - Data source: src/config/navigationMenu.js

- HomeCarousel with Sliding Images
  - src/customer/Components/Carousel/HomeCarousel.jsx
  - Data Source: src/customer/Components/Carousel/HomeCaroselData.js
- HomeProductSection 
  - Data source : src/Data/Men/men_kurta.js
  - Renders HomeProductCard inside AliceCarousel
  - ```json
          {
          "id":1,
          "imageUrl": "",
          "brand": "Majestic Man",
          "title": "Men Straight Kurta",
          "color": "Green",
          "discountedPrice": 499,
          "price": 1499,
          "discountPersent": 66,
          "size": [
            {
              "name": "S",
              "quantity": 20
            },
            {
              "name": "M",
              "quantity": 30
            },
            {
              "name": "L",
              "quantity": 50
            }
          ],
          "quantity": 100,
          "topLevelCategory": "Men",
          "secondLevelCategory": "Clothing",
          "thirdLevelCategory": "mens_kurta",
          "description":"A tradi..."
        }
      ```

### Product Page
- The Product page houses sorting and filterting options and lists all products in a product grid
  - src/customer/Components/Product/Product/Product.jsx
  - DataSource: src/Data/Men/men_kurta.js
- ProductCard showscases a single product
### Product Detail Page
- ProductDetails page is a tailwind UI component 
### Cart Page
### Checkout Page
  

### Developer notes
- npx create-react-app
- npm i @mui ...
- npm i @mui/icons...
- npm install -D tailwindcss
- npx tailwindcss init
- npm i heroicons
- npm i @headless-ui
- npm i @heroicons/react 
- npm i react-alice-carousel
- npm i react-router-dom


- `## Functional Change 1: Hardcoded products`






```.js

const product = {
  name: "Pink Kurta",
  price: "₹996",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Kurta", href: "#" },
  ],
  images: [
    {
      src: "https://res.cloudinary.com/dq0bgjjxp/image/upload/v1725726293/IMG_20240907_17172049_bemcdl.png",
      alt: "Pink Kurta.",
    },
    {
      src: "https://res.cloudinary.com/dq0bgjjxp/image/upload/v1725721717/IMG_20240907_17172049_pe17ur.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://res.cloudinary.com/dq0bgjjxp/image/upload/v1725721726/IMG_20240907_17200710_mwsyaa.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
```