<template>
  <section id="sale" class="sale center">
    <h2 class="sale__title">Sale</h2>
    <div class="sale-content">
      <div class="sale-imglist">
        <img
          class="sale-imglist__item"
          @click="selectImg(item)"
          v-for="item in listImg"
          :key="item.id"
          :src="item"
          alt=""
        />
      </div>
      <img class="sale__bigimg" :src="bigImg" alt="" />
      <div class="sale-discription">
        <h3 class="sale-discription__name">
          Greenlane Watch By Police For MenHT
        </h3>
        <p class="sale-discription__tag">Product tag: PEWJK2227003</p>
        <div class="sale-discription__price">
          <span>€700</span>
          <span class="sale-discription__price-discont"
            ><strike>€1000</strike></span
          >
        </div>

        <hr />
        <h4 class="sale-discription__title">Description</h4>
        <p class="sale-discription__info">
          Richly detailed with an&nbsp;understated design&nbsp;&mdash; the
          Police Men&rsquo;s Greenlane watch features a&nbsp;versatile
          multifunction design that fits effortlessly into work and play. The
          steel case is&nbsp;adorned with a semi-&nbsp;transparent black dial.
          The timepiece exhibits a&nbsp;contrast through a&nbsp;black&nbsp;IP
          bracelet with matching crown and pushers.
        </p>
        <hr />
        <h4 class="sale-discription__title">DETAILS & FEATUREStion</h4>
        <div class="sale-discription__info">
          <p>Gender: man Size: 46x54.5mm</p>
          <p>Case Colour: Steel</p>
          <p>Band Material: Metal</p>
          <p>Case Material: Metal</p>
          <p>Features: Multifunction</p>
          <p>Water Resistant: 5 (ATM)</p>
          <p>Band Colour: Steel</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bigImg: require("../assets/img/img63.png"),
      listImg: {
        img1: require("../assets/img/img63.png"),
        img2: require("../assets/img/img64.png"),
        img3: require("../assets/img/img65.png"),
        img4: require("../assets/img/img66.png"),
      },
    };
  },
  methods: {
    selectImg(item) {
      this.bigImg = item;
    },
  },
};
</script>

<style lang="scss" scoped></style>
