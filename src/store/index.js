import { createStore } from "vuex";

export default createStore({
  state: {
    slides: [
      { imgSrc: require("../assets/img/watch1.png") },
      { imgSrc: require("../assets/img/watch2.png") },
      { imgSrc: require("../assets/img/watch3.png") },
      { imgSrc: require("../assets/img/watch4.png") },
      { imgSrc: require("../assets/img/watch5.png") },
    ],
    watches: [
      {
        id: 1,
        src: require("@/assets/img/Catalog1.png"),
        name: "Tube Watch S42 Date Steel With Black Case",
        price: "€395",
      },
      {
        id: 2,
        src: require("@/assets/img/Catalog2.png"),
        name: "Avondale Watch Police For Men",
        price: "€800",
      },
      {
        id: 3,
        src: require("@/assets/img/Catalog3.png"),
        name: "Diver 300M Co‑Axial Master Chronometer Chronograph",
        price: "€600",
      },
      {
        id: 4,
        src: require("@/assets/img/Catalog4.png"),
        name: "Diver 300M Co-Axial Master Chronometer",
        price: "€1400",
      },
      {
        id: 5,
        src: require("@/assets/img/Catalog5.png"),
        name: "Taman Watch By Police For Men",
        price: "€500",
      },
      {
        id: 6,
        src: require("@/assets/img/Catalog6.png"),
        name: "Malawi Watch Police For Men",
        price: "€555",
      },
      {
        id: 7,
        src: require("@/assets/img/Catalog7.png"),
        name: "Diver 300M Co-Axial Master Chronometer",
        price: "€1200",
      },
      {
        id: 8,
        src: require("@/assets/img/Catalog8.png"),
        name: "Greenlane Watch By Police For Men",
        price: "€1000",
      },
      {
        id: 9,
        src: require("@/assets/img/Catalog9.png"),
        name: "Squardrc 5402 Chrono",
        price: "€359",
      },
      {
        id: 10,
        src: require("@/assets/img/Catalog10.png"),
        name: "Diver 300M Co‑Axial Master Chronometer Chronograph",
        price: "€400",
      },
      {
        id: 11,
        src: require("@/assets/img/Catalog11.png"),
        name: "Citizen",
        price: "€619",
      },
      {
        id: 12,
        src: require("@/assets/img/Catalog12.png"),
        name: "Armani Exchange",
        price: "€400",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
