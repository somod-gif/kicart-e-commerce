// app/products.js
const products = [
  {
    id: 1,
    name: "Double Sofa",
    image: "https://imgs.search.brave.com/8uwXKYNecbRHBP7OI56nrg6HelbQlvWHFKtqH2cCeyg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmljZXBuZy5jb20v/cG5nL2RldGFpbC83/LTcxNDM4X2JsYWNr/LXNvZmEtcG5nLWlt/YWdlLWRvdWJsZS1z/b2ZhLWJlZC1sZWF0/aGVyLnBuZw",
    price: 200,
    category: "Furniture",
    stock: 3,
    rating: 4.0,
  },
  {
    id: 2,
    name: "Single Sofa",
    image: "https://imgs.search.brave.com/aSMlr7AuubrRHbDOcJxUK75p83DwSi7ZgfN6Z3VWjuo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGVpc3VyZW1vZC5j/b20vY2RuL3Nob3Av/ZmlsZXMvZnMzNnYt/YmdfMV81MzN4Lmpw/Zz92PTE3MzM5NjA4/NjU",
    price: 150,
    category: "Furniture",
    stock: 3,
    rating: 4.0,
  },
  {
    id: 3,
    name: "Arm Chair",
    image: "https://imgs.search.brave.com/AaqzkDvSL-oqPPaqWGSbVH2zzu5h7w7Q8JmufR1KLak/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU0/OTI2NjIwL3Bob3Rv/L2FybWNoYWlyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1s/TFJfbE5WS3dvMmVp/RWwtaTVRWmxDdVBX/YnU4SkQwNlpkQkVt/YkdlWU5JPQ",
    price: 100,
    category: "Furniture",
    stock: 3,
    rating: 4.0,
  },
  {
    id: 4,
    name: "Iphone 15 ",
    image: "https://imgs.search.brave.com/XtJ0xMNNSbZ1nPycsSDgpU9P7Xi5Z6QFPWiRAMqrKNY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXR0LmNvbS9zY21z/YXNzZXRzL2dsb2Jh/bC9kZXZpY2VzL3Bo/b25lcy9hcHBsZS9h/cHBsZS1pcGhvbmUt/MTUvY2Fyb3VzZWwv/YmxhY2stMS5wbmc",
    price: 300,
    category: "Electronics",
    stock: 3,
    rating: 4.0,
  },
  {
    id: 5,
    name: "Iphone 16 pro max",
    image: "https://imgs.search.brave.com/HvRzKOplG4cYmf4RZZWOjgz_GKVyK6LS6Ld9nFDoTpw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90LW1v/YmlsZS5zY2VuZTcu/Y29tL2lzL2ltYWdl/L1RtdXNwcm9kL0Fw/cGxlLWlQaG9uZS0x/Ni1VbHRyYW1hcmlu/ZS1mcm9udGltYWdl",
    price: 400,
    category: "Electronics",
    stock: 3,
    rating: 4.0,
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    image: "https://imgs.search.brave.com/hntcTDY8Ni7U1BK4pgu3K15H1oRW5DX0EdmV_UQd6SQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dG96b3N0b3JlLmNv/bS9jZG4vc2hvcC9m/aWxlcy90b3pvLWUx/LXdpcmVsZXNzLWVh/cmJ1ZHMtYmxhY2tf/MjAwMHguanBnP3Y9/MTczMTI0Njg1NA",
    price: 50,
    category: "Accessories",
    stock: 3,
    rating: 4.0,
  },
  {
    id: 7,
    name: "Smart Watch",
    image: "https://imgs.search.brave.com/xCpCFOHth1M9Wk8ZV_6Kt7AP7s5SEy3E9XYU5e_ZmNE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg2/OTkzMjI4L3Bob3Rv/L3NtYXJ0LXdhdGNo/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1kVktBN1lTVGpu/aHpZQW9ZY3hEd0dF/dVYxOFFWLUstWXVa/Q0FCbmp0OHBFPQ",
    price: 120,
    category: "Accessories",
    stock: 3,
    rating: 4.0,
  },
  {
    id: 8,
    name: "Gaming Chair",
    image: "https://imgs.search.brave.com/znPxFh6hP2WCohcczFj6MGFiO_gTfOx1V3rHeCRCePM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzErLTFVZFFnREwu/anBn",
    price: 250,
    category: "Furniture",
    stock: 3,
    rating: 4.0,
  },
  {
    id: 9,
    name: "Desk Lamp",
    image: "https://imgs.search.brave.com/Xwnn1B7JOZpi2Gh3oiUfbhrlPlubLMl-JD6wIhnic14/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTEx/NjA2NDcyL3Bob3Rv/L2Rlc2stbGFtcC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UUd6V3hjanZLVzFE/SlF5NVQwZWxkcHdC/VnVjbHJsaHEzX25Q/V3pselNNcz0",
    price: 30,
    category: "Accessories",
    stock: 3,
    rating: 4.0,
  },
  {
    id: 10,
    name: "Wireless Keyboard",
    image: "https://imgs.search.brave.com/XTUI9Ytr3qu-fiYCFyfAJJM7xChkNYNVCqi-av-KnjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDIzLzEwL2JsdWV0/b290aC1rZXlib2Fy/ZC0yMDQ4cHgtMDg5/MS5qcGc_YXV0bz13/ZWJwJnF1YWxpdHk9/NzUmd2lkdGg9MTAy/NA",
    price: 80,
    category: "Electronics",
    stock: 3,
    rating: 4.0,
  },
];

export default products;
