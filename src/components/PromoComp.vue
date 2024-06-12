<template>
  <section class="promo center">
    <div class="collection">
      <h1 class="promo__heading">
        Welcome to our collection of premium watches
      </h1>
      <p class="promo__discript">
        Our watches are not just timepieces, but also an expression of your
        personality and lifestyle. From classic designs to modern ones, we have
        a watch to suit every taste and occasion.
      </p>
      <div class="slider-container">
        <div class="slider">
          <img
            v-for="(slide, index) in slides"
            :key="index"
            :src="slide.imgSrc"
            :alt="'Slide ' + (index + 1)"
            class="slide"
            v-show="index === currentIndex"
          />
        </div>
        <button @click="prevSlide" class="arrow arrow-left">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13L1 7L7 1"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button @click="nextSlide" class="arrow arrow-right">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13L7 7L1 1"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div class="banner">
        <img
          class="banner-img"
          width="676"
          src="../assets/img/Rectangle 1.png"
          alt="baner"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentIndex: 0,
      sliderWidth: 436,
      sliderHeight: 255,
    };
  },
  computed: {
    ...mapState(["slides"]),
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
  },
};
</script>

<style lang="scss"></style>
