var map;



let food1 = {
  "name": "Pizza",
  "basePrice": 9.99,
  "imageSrc": "./assets/img/c700x420.jpg",
  // "imageSrc": "https://img.grouponcdn.com/deal/8DDtq5XRzVnLXEUnPHPd/p2-2048x1229/v1/c700x420.jpg",
  "tags": [],
  "customize": [
    {
      name: "Size",
      options: [
        { name: "Small", price: -1.20 },
        { name: "Medium", price: 0.00 },
        { name: "Large", price: +1.20 },
        { name: "Super", price: +3.00 },
      ],
      required: true,
    }, {
      name: "Cheese",
      options: [
        { name: "None", price: 0.00 },
        { name: "Medium", price: +0.50 },
        { name: "Large", price: +1.00 },
      ],
      required: true,
    }, {
      name: "Sauce",
      options: [
        { name: "Tomato", price: 0.00 },
        { name: "Butter", price: 0.00 },
        { name: "Garlic", price: 0.00 },
      ],
      required: true,
    }, {
      name: "Toppings",
      options: [
        { name: "Pepperoni", price: 1.00 },
        { name: "Bacon", price: +1.00 },
        { name: "Pineapple", price: +1.00 },
        { name: "Bacon Crumble", price: +1.00 },
        { name: "Shawarma", price: +1.00 },
        { name: "Chili", price: +1.00 },
        { name: "Lettuce", price: +1.00 },
        { name: "Anchovies", price: +1.00 },
        { name: "Sausage", price: +1.00 },
      ],
      required: false,
    }
  ]
};

let food12 = {
  "name": "Vegan Cheese Pizza",
  "basePrice": 3.99,
  "imageSrc": "./assets/img/veganpizza.webp",
  // "imageSrc": "https://img.grouponcdn.com/deal/8DDtq5XRzVnLXEUnPHPd/p2-2048x1229/v1/c700x420.jpg",
  "tags": ["vegan"]
};

let food2 = {
  "name": "Chicken Panzerotti",
  "basePrice": 4.99,
  "imageSrc": "./assets/img/ckn-e48-chicken-panzerotti-006.jpg",
  // "imageSrc": "http://criderfoods.com/wp-content/uploads/2015/05/ckn-e48-chicken-panzerotti-006.jpg",
  "tags": ["vegan"]
};

let food3 = {
  "name": "Beef Panzerotti",
  "basePrice": 5.99,
  "imageSrc": "./assets/img/chilean_beef_empanadas_alt-web.jpg",
  // "imageSrc": "http://criderfoods.com/wp-content/uploads/2015/05/ckn-e48-chicken-panzerotti-006.jpg",
  "tags": ["halal"]
};

let food4 = {
  "name": "Pasta",
  "basePrice": 4.99,
  "imageSrc": "./assets/img/One-Pot-Pepperoni-Pizza-Pasta-feat.jpg",
  // "imageSrc": "https://www.thechunkychef.com/wp-content/uploads/2017/10/One-Pot-Pepperoni-Pizza-Pasta-feat.jpg",
  "tags": ["halal"]
};

let food5 = {
  "name": "Vege Pasta",
  "basePrice": 4.99,
  "imageSrc": "./assets/img/veggie-pasta-04.jpg",
  // "imageSrc": "./assets/img/One-Pot-Pepperoni-Pizza-Pasta-feat.jpg",
  // "imageSrc": "https://www.thechunkychef.com/wp-content/uploads/2017/10/One-Pot-Pepperoni-Pizza-Pasta-feat.jpg",
  "tags": ["vegan"]
};

let food6 = {
  "name": "Fries",
  "basePrice": 1.99,
  "imageSrc": "./assets/img/fries_620x330_51517901541.jpg",
  // "imageSrc": "https://recipes.timesofindia.com/photo/54659021.cms",
  "tags": ["vegan"],
  "customize": [
    {
      name: "Size",
      options: [
        { name: "Small", price: -0.20 },
        { name: "Medium", price: 0.00 },
        { name: "Large", price: +0.20 },
        { name: "Super", price: +1.00 },
      ],
      required: true,
    }, {
      name: "Cheese",
      options: [
        { name: "None", price: 0.00 },
        { name: "Medium", price: +0.50 },
        { name: "Large", price: +1.00 },
      ],
      required: true,
    }, {
      name: "Toppings",
      options: [
        { name: "Ketchup", price: 0.00 },
        { name: "Bacon", price: +0.50 },
        { name: "Pickles", price: +1.00 },
      ],
      required: false,
    }
  ]
};
let food7 = {
  "name": "Soda",
  "basePrice": 1.49,
  "imageSrc": "./assets/img/soda.jpg",
  // "imageSrc": "https://recipes.timesofindia.com/photo/54659021.cms",
  "tags": ["vegan"],
  "customize": [
    {
      name: "Size",
      options: [
        { name: "Medium", price: 0.00 },
        { name: "Small", price: -0.20 },
        { name: "Large", price: +0.20 },
        { name: "Super", price: +2.00 },
      ],
      required: true,
    }, {
      name: "Flavour",
      options: [
        { name: "Pepsi", price: 0.00 },
        { name: "Coke", price: 0.00 },
        { name: "Fanta", price: 0.00 },
        { name: "Dr.Pepper", price: 0.00 },
      ],
      required: true,
    }, {
      name: "Ice",
      options: [
        { name: "Normal", price: 0.00 },
        { name: "None", price: 0.00 },
        { name: "Extra", price: +0.00 },
      ],
      required: true,
    }
  ]
};

let menu1 = [
  {
    title: "Pizzas",
    items: [food1, food12]
  }, {
    title: "Dishes",
    items: [food2, food3, food4, food5]
  }, {
    title: "Sides",
    items: [food6, food7]
  }
]


let r2food1 = {
  "name": "Make Your Own",
  "basePrice": 5.49,
  "imageSrc": "./assets/img/boba.png",
  "tags": ["vegan"],
  "customize": [
    {
      name: "Size",
      options: [
        { name: "Medium", price: 0.00 },
        { name: "Small", price: -0.20 },
        { name: "Large", price: +0.20 },
        { name: "Super", price: +2.00 },
      ],
      required: true,
    }, {
      name: "Type",
      options: [
        { name: "Honey Tree", price: 0.00 },
        { name: "Milk Chocolate", price: 0.00 },
        { name: "Blue Mountain", price: 0.00 },
        { name: "Red Bean", price: 0.00 },
      ],
      required: true,
    }, {
      name: "Sugar",
      options: [
        { name: "Normal", price: 0.00 },
        { name: "None", price: 0.00 },
        { name: "Extra", price: +0.00 },
      ],
      required: true,
    }, {
      name: "Ice",
      options: [
        { name: "Normal", price: 0.00 },
        { name: "None", price: 0.00 },
        { name: "Extra", price: +0.00 },
      ],
      required: true,
    }
  ]
};

let r2food2 = {
  "name": "Daily Special",
  "basePrice": 4.49,
  "imageSrc": "./assets/img/boba.png",
  "tags": ["vegan"],
  "customize": [
    {
      name: "Size",
      options: [
        { name: "Medium", price: 0.00 },
        { name: "Small", price: -0.20 },
        { name: "Large", price: +0.20 },
        { name: "Super", price: +2.00 },
      ],
      required: true,
    }, {
      name: "Sugar",
      options: [
        { name: "Normal", price: 0.00 },
        { name: "None", price: 0.00 },
        { name: "Extra", price: +0.00 },
      ],
      required: true,
    }, {
      name: "Ice",
      options: [
        { name: "Normal", price: 0.00 },
        { name: "None", price: 0.00 },
        { name: "Extra", price: +0.00 },
      ],
      required: true,
    }
  ]
};

let r2food3 = {
  "name": "Cotton Candy",
  "basePrice": 1.49,
  "imageSrc": "./assets/img/cotton.png",
  "tags": ["vegan", "vegetarian"],
};

let r2food4 = {
  "name": "pocky",
  "basePrice": 1.49,
  "imageSrc": "./assets/img/pocky.jpg",
  "tags": ["vegan", "vegetarian"],
};

let r2food5 = {
  "name": "Choco Pie",
  "basePrice": 3.49,
  "imageSrc": "./assets/img/choco.jpg",
  "tags": ["vegetarian"],
  "customize": [
    {
      name: "Slices",
      options: [
        { name: "1 slice", price: 0.00 },
        { name: "2 slices", price: +2 },
        { name: "3 slices", price: +3 },
        { name: "Whole pie", price: +9.00 },
      ],
      required: true,
    }

  ]
};

let menu2 = [
  {
    title: "Bubble Tea",
    items: [r2food1, r2food2]
  }, {
    title: "Cotton Candy",
    items: [r2food3]
  }, {
    title: "Sweets",
    items: [r2food4, r2food5]
  }
]

export const restaurants = [
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
    tags: ["vegan", "vegetarian"],
    menu: menu2
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
    menu: menu2
  },
  {
    name: "Pizza's Candy",
    latLng: { lat: 43.2630, lng: -79.9152 },
    deliveryTime: 5,
    deliveryFee: 8.99,
    rating: 4.6,
    money: "💲💲💲",
    showTags: "🥛🍬",
    tags: ["halal", "vegetarian"],
    menu: menu1
  }
]


console.log(JSON.stringify(restaurants));
