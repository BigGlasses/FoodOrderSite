var map;



let food1 = {
  "name": "Pizza",
  "basePrice": 4.99,
  "imageSrc": "https://img.grouponcdn.com/deal/8DDtq5XRzVnLXEUnPHPd/p2-2048x1229/v1/c700x420.jpg",
  "tags": ["vegan"]
};

let food2 = {
  "name": "Chicken Panzerotti",
  "basePrice": 4.99,
  "imageSrc": "http://criderfoods.com/wp-content/uploads/2015/05/ckn-e48-chicken-panzerotti-006.jpg",
  "tags": ["vegan"]
};

let food3 = {
  "name": "Beef Panzerotti",
  "basePrice": 5.99,
  "imageSrc": "http://criderfoods.com/wp-content/uploads/2015/05/ckn-e48-chicken-panzerotti-006.jpg",
  "tags": ["halal"]
};

let food4 = {
  "name": "Pasta",
  "basePrice": 4.99,
  "imageSrc": "https://www.thechunkychef.com/wp-content/uploads/2017/10/One-Pot-Pepperoni-Pizza-Pasta-feat.jpg",
  "tags": ["halal"]
};

let food5 = {
  "name": "Vege Pasta",
  "basePrice": 4.99,
  "imageSrc": "https://www.thechunkychef.com/wp-content/uploads/2017/10/One-Pot-Pepperoni-Pizza-Pasta-feat.jpg",
  "tags": ["vegan"]
};

let food6 = {
  "name": "Fries",
  "basePrice": 1.99,
  "imageSrc": "https://recipes.timesofindia.com/photo/54659021.cms",
  "tags": ["vegan"],
  "customize": [
    {
      name: "size",
      options: [
        { name: "Small", price: -0.20 },
        { name: "Medium", price: 0.00 },
        { name: "Large", price: +0.20 },
        { name: "Super", price: +1.00 },
      ],
      required: true,
    },{
      name: "cheese",
      options: [
        { name: "None", price: 0.00 },
        { name: "Medium", price: +0.50 },
        { name: "Large", price: +1.00 },
      ],
      required: true,
    },{
      name: "toppings",
      options: [
        { name: "Ketchup", price: 0.00 },
        { name: "Bacon", price: +0.50 },
        { name: "Pickles", price: +1.00 },
      ],
      required: false,
    },{
      name: "toppings",
      options: [
        { name: "Ketchup", price: 0.00 },
        { name: "Bacon", price: +0.50 },
        { name: "Pickles", price: +1.00 },
      ],
      required: false,
    },{
      name: "toppings",
      options: [
        { name: "Ketchup", price: 0.00 },
        { name: "Bacon", price: +0.50 },
        { name: "Pickles", price: +1.00 },
      ],
      required: false,
    },{
      name: "toppings",
      options: [
        { name: "Ketchup", price: 0.00 },
        { name: "Bacon", price: +0.50 },
        { name: "Pickles", price: +1.00 },
      ],
      required: false,
    }
  ]
};

let menu1 = [
  {
    title: "Combos",
    items: [food1, food2, food3, food4, food5]
  }, {
    title: "Combos",
    items: [food1, food2, food3, food4, food5]
  }, {
    title: "Sides",
    items: [food6]
  }
]

var restaurants = [
  {
    name: "Eleven Eighty",
    latLng: { lat: 43.2630, lng: -79.9192 },
    deliveryTime: 15,
    deliveryFee: 4.99,
    rating: 3,
    money: "💲💲",
    showTags: "🍔🍺",
    tags: [],
    menu: menu1
  },
  {
    name: "Puma's Candy",
    latLng: { lat: 43.2590, lng: -79.9192 },
    deliveryTime: 14,
    deliveryFee: 3.99,
    rating: 4.6,
    money: "💲💲",
    showTags: "🥛🍬",
    tags: [],
    menu: menu1
  },
  {
    name: "Puma's Candy Deluxe",
    latLng: { lat: 43.2630, lng: -79.9210 },
    deliveryTime: 10,
    deliveryFee: 1.99,
    rating: 4.6,
    money: "💲💲💲💲",
    showTags: "🥛🍬",
    tags: [],
    menu: menu1
  },
  {
    name: "Puma's Candy",
    latLng: { lat: 43.2630, lng: -79.9152 },
    deliveryTime: 5,
    deliveryFee: 8.99,
    rating: 4.6,
    money: "💲💲💲",
    showTags: "🥛🍬",
    tags: ["halal"],
    menu: menu1
  }
]


console.log(JSON.stringify(restaurants));