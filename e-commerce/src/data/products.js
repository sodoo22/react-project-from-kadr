// {
//     original: '',
//     thumbnail: ''
// }

const products = [
  {
    id: 1,
    title: "Camera",
    imgUrl: [
      {
        original: "../image/camera3.png",
        thumbnail: "../image/camera3.png",
      },
    ],
    price: 11.7,
    rating: 5,
    reviews: [
      {
        customer: "Mary",
        review: "This product is really well",
      },
      {
        customer: "Kevin",
        review: "Loved this product",
      },
    ],
    quantity: 4,
    color: ["black"],
  },
  {
    id: 2,
    title: "Wireless headphones",
    imgUrl: [
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/IZgoiSEITyqxGYys91X6",
        thumbnail:
          "https://media.graphassets.com/resize=w:200,fit:crop/quality=value:65/auto_image/compress/IZgoiSEITyqxGYys91X6",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/Prkm0Ae7TRqvTC174ItE",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/Prkm0Ae7TRqvTC174ItE",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/OiToBMx5Tfyz1uWdBD21",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/OiToBMx5Tfyz1uWdBD21",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/IRyDpzTfRRWesXxEl0Sb",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/IRyDpzTfRRWesXxEl0Sb",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/PEpG5xXlRAuuZw4T5DUp",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/PEpG5xXlRAuuZw4T5DUp",
      },

      // {
      //     original: '',
      //     thumbnail: ''
      // }
    ],
    price: 11.7,
    rating: 3,
    reviews: [
      {
        customer: "Mary",
        review: "This product is really well",
      },
      {
        customer: "Kevin",
        review: "Loved this product",
      },
    ],
    quantity: 0,
    color: ["black", "brown", "white"],
  },
  {
    id: 3,
    title: "Macbook Air",
    imgUrl: [
      {
        original: "../image/macbook5.png",
        thumbnail: "../image/macbook5.png",
      },
    ],
    price: 11.7,
    rating: 2,
    reviews: [],
    quantity: 0,
    color: ["black", "brown", "white"],
  },
  {
    id: 4,
    title: "Play game",
    imgUrl: [
      {
        original: "../image/play-green.png",
        thumbnail: "../image/play-green.png",
      },
      {
        original: "../image/play.png",
        thumbnail: "../image/play.png",
      },
    ],
    price: 11.7,
    rating: 3.5,
    reviews: [
      {
        customer: "Mary",
        review: "This product is really well",
      },
      {
        customer: "Kevin",
        review: "Loved this product",
      },
    ],
    quantity: 9,
    color: ["#000000", "#67001a", "#03c03c"],
  },
  {
    id: 5,
    title: "iWatch",
    imgUrl: [
      {
        original: "../image/iwatch.jpg",
        thumbnail: "../image/iwatch.jpg",
      },
    ],
    price: 11.7,
    rating: 1,
    reviews: [],
    quantity: 0,
    color: ["black", "brown", "white"],
  },
  {
    id: 6,
    title: "Tablet as a laptop",
    imgUrl: [
      {
        original: "../image/notebook.png",
        thumbnail: "../image/notebook.png",
      },
    ],
    price: 11.7,
    rating: 5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
  },
  {
    id: 7,
    title: "Wireless headphones SBD500",
    imgUrl: [
      {
        original:
          "https://www.klarna.com/sac/product/640x640/3000073278/Sennheiser-HD-450BT.jpg",
        thumbnail:
          "https://www.klarna.com/sac/product/640x640/3000073278/Sennheiser-HD-450BT.jpg",
      },
      {
        original:
          "https://www.klarna.com/sac/product/640x640/3006200844/Sennheiser-HD-450BT.jpg",
        thumbnail:
          "https://www.klarna.com/sac/product/640x640/3006200844/Sennheiser-HD-450BT.jpg",
      },
      {
        original:
          "https://www.klarna.com/sac/product/640x640/3000073282/Sennheiser-HD-450BT.jpg",
        thumbnail:
          "https://www.klarna.com/sac/product/640x640/3000073282/Sennheiser-HD-450BT.jpg",
      },
      {
        original:
          "https://www.klarna.com/sac/product/640x640/3000073279/Sennheiser-HD-450BT.jpg",
        thumbnail:
          "https://www.klarna.com/sac/product/640x640/3000073279/Sennheiser-HD-450BT.jpg",
      },
      {
        original:
          "https://www.klarna.com/sac/product/640x640/3006200845/Sennheiser-HD-450BT.jpg",
        thumbnail:
          "https://www.klarna.com/sac/product/640x640/3006200845/Sennheiser-HD-450BT.jpg",
      },
    ],
    price: 11.7,
    rating: 5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
  },
  {
    id: 8,
    title: "MOMENTUM True Wireless 3",
    imgUrl: [
      {
        original:
          "https://media.graphassets.com/resize=w:600,fit:crop/quality=value:65/auto_image/compress/YNhCcxj0TICKRgBCCcHj",
        thumbnail:
          "https://media.graphassets.com/resize=w:200,fit:crop/quality=value:65/auto_image/compress/YNhCcxj0TICKRgBCCcHj",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/PJG7oNoRyeZNyW4AVQGw",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/PJG7oNoRyeZNyW4AVQGw",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/ix5lCyqpTnKvNdTXpnPb",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/ix5lCyqpTnKvNdTXpnPb",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/3bCEoXRSOa6olX9rMjlv",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/3bCEoXRSOa6olX9rMjlv",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/zhJ9Z3y6RRieFwevrifG",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/zhJ9Z3y6RRieFwevrifG",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/qAXmwxzFSkGOaMNoOrUW",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/qAXmwxzFSkGOaMNoOrUW",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/RgMns1gQLibEVNLrvGgZ",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/RgMns1gQLibEVNLrvGgZ",
      },
    ],
    price: 11.7,
    rating: 3,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
  },
  {
    id: 9,
    title: "Macbook Air",
    imgUrl: [
      {
        original: "../image/macbook.jpg",
        thumbnail: "../image/macbook.jpg",
      },
    ],
    price: 1111,
    rating: 5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
  },

  {
    id: 10,
    title: "Camera",
    imgUrl: [
      {
        original: "../image/camera3.png",
        thumbnail: "../image/camera3.png",
      },
    ],
    price: 11.7,
    rating: 5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
  },
  {
    id: 11,
    title: "iWatch",
    imgUrl: [
      {
        original: "../image/iwatch.jpg",
        thumbnail: "../image/iwatch.jpg",
      },
    ],
    price: 299,
    rating: 2,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
  },
  {
    id: 12,
    title: "Play game",
    imgUrl: [
      {
        original: "../image/play.png",
        thumbnail: "../image/play.png",
      },
    ],
    price: 11.7,
    rating: 3.5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
  },
  {
    id: 13,
    title: "Wireless headphones",
    imgUrl: [
      {
        original: "../image/headset.png",
        thumbnail: "../image/headset.png",
      },
    ],
    price: 11.7,
    rating: 1,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
  },
  {
    id: 14,
    title: "Tablet as a laptop",
    imgUrl: [
      {
        original: "../image/notebook.png",
        thumbnail: "../image/notebook.png",
      },
    ],
    price: 11.7,
    rating: 5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
  },
  {
    id: 15,
    title: "Wireless headphones",
    imgUrl: [
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/kSXO4Z6SHCbU6YtFvX6A",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/kSXO4Z6SHCbU6YtFvX6A",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/mCcQ05JvT3epCnvCQa2d",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/mCcQ05JvT3epCnvCQa2d",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/cKpW65AXTdyLXjlY0540",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/cKpW65AXTdyLXjlY0540",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:260,fit:crop/quality=value:65/auto_image/compress/ElYgKeLMQhaO1VAZJuwM",
        thumbnail:
          "https://media.graphassets.com/resize=w:260,fit:crop/quality=value:65/auto_image/compress/ElYgKeLMQhaO1VAZJuwM",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:760,fit:crop/quality=value:65/auto_image/compress/ElYgKeLMQhaO1VAZJuwM",
        thumbnail:
          "https://media.graphassets.com/resize=w:760,fit:crop/quality=value:65/auto_image/compress/ElYgKeLMQhaO1VAZJuwM",
      },
      {
        original:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/xteaaB9ASb26BChkc8xt",
        thumbnail:
          "https://media.graphassets.com/resize=w:890,fit:crop/quality=value:65/auto_image/compress/xteaaB9ASb26BChkc8xt",
      },
    ],
    price: 11.7,
    rating: 5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
  },
  {
    id: 16,
    title: "Wireless headphones",
    imgUrl: [
      {
        original: "../image/headset.png",
        thumbnail: "../image/headset.png",
      },
    ],
    price: 11.7,
    rating: 5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
  },
  {
    id: 17,
    title: "iWatch Ultra 2040",
    imgUrl: [
      {
        original: "../image/iwatch.jpg",
        thumbnail: "../image/iwatch.jpg",
      },
    ],
    price: 11.7,
    rating: 5,
    reviews: [],
    quantity: 9,
    color: ["black", "brown", "white"],
  },
];

export default products;
