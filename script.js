/* ─────────────────────────────────────────
   GENERIC COMPONENT FACTORY
   Each section passes its own card builder
───────────────────────────────────────── */
function createSection({
  gridId,
  trackId,
  prevBtnId,
  nextBtnId,
  data,
  createCard,
  step = 240,
}) {
  const grid = document.getElementById(gridId);
  const track = document.getElementById(trackId);

  // Render cards
  data.forEach((item) => grid.appendChild(createCard(item)));

  // Scroll buttons
  document.getElementById(prevBtnId).addEventListener("click", () => {
    track.scrollBy({ left: -step, behavior: "smooth" });
  });
  document.getElementById(nextBtnId).addEventListener("click", () => {
    track.scrollBy({ left: step, behavior: "smooth" });
  });
}

/* ─────────────────────────────────────────
     DATA — one object per card
  ───────────────────────────────────────── */
const products = [
  {
    name: "Denim Nova Overall",
    price: "$128.00",
    swatches: ["#7ba7c7", "#1e3354"],
    pic: "./imgs/pic1.png",
  },
  {
    name: "Luneberg Sweater",
    price: "$98.00",
    swatches: ["#b8c8a8", "#f0ece4"],
    pic: "./imgs/pic1.png",
  },
  {
    name: "Denim Tern Dress",
    price: "$108.00",
    swatches: ["#5b9ecc", "#1e3a55"],
    pic: "./imgs/pic1.png",
  },
  {
    name: "Narrows Pant",
    price: "$98.00",
    swatches: ["#c4c0b5", "#4a4840"],
    pic: "./imgs/pic1.png",
  },
  {
    name: "Lakeside Florals Tank",
    price: "$40.00",
    swatches: ["#7a7870", "#2a8a78", "#3aacaa"],
    pic: "./imgs/pic1.png",
  },
  {
    name: "Iris Cardigan",
    price: "$98.00",
    swatches: ["#f0ece4", "#b8c8a8"],
    pic: "./imgs/pic1.png",
  },
];

function createProductCard({ name, price, swatches, pic }) {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
      <div class="card-image">
        <img src="${pic}">
      </div>
      <div class="card-swatches">
        ${swatches.map((color) => `<span class="swatch" style="background:${color};"></span>`).join("")}
      </div>
      <p class="card-name">${name}</p>
      <p class="card-price">${price}</p>
    `;

  return card;
}

createSection({
  gridId: "products-grid",
  trackId: "scroll-track",
  prevBtnId: "btn-prev",
  nextBtnId: "btn-next",
  data: products,
  createCard: createProductCard,
});

/* ─────────────────────────────────────────
   SECTION 2 — Most Popular Categories
───────────────────────────────────────── */
const categories = [
  { name: "Women's Joggers & Pants", pic: "./imgs/cat1.png" },
  { name: "Men's Shorts", pic: "./imgs/cat1.png" },
  { name: "Women's Tops & Shirts", pic: "./imgs/cat1.png" },
  { name: "Women's T-Shirts", pic: "./imgs/cat1.png" },
  { name: "Bags & Backpacks", pic: "./imgs/cat1.png" },
  { name: "Hat & Beanies", pic: "./imgs/cat1.png" },
  { name: "Hat & Beanies", pic: "./imgs/cat1.png" },
];

function createCategoryCard({ name, pic }) {
  const card = document.createElement("div");
  card.className = "category-card";
  card.innerHTML = `
    <div class="cat-image"><img src="${pic}" alt="${name}"></div>
    <p class="cat-name">${name} <span class="cat-arrow">→→</span></p>
  `;
  return card;
}

createSection({
  gridId: "categories-grid",
  trackId: "cat-scroll-track",
  prevBtnId: "cat-btn-prev",
  nextBtnId: "cat-btn-next",
  data: categories,
  createCard: createCategoryCard,
});

/* ─────────────────────────────────────────
     RENDER — mount all cards into the grid
//   ───────────────────────────────────────── */
// const grid = document.getElementById("products-grid");
// products.forEach((product) => grid.appendChild(createProductCard(product)));

/* ─────────────────────────────────────────
     INTERACTIONS — scroll & tabs
  ───────────────────────────────────────── */
// const track = document.getElementById("scroll-track");
// const STEP = 240;

// document.getElementById("btn-prev").addEventListener("click", () => {
//   track.scrollBy({ left: -STEP, behavior: "smooth" });
// });
// document.getElementById("btn-next").addEventListener("click", () => {
//   track.scrollBy({ left: STEP, behavior: "smooth" });
// });

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});
