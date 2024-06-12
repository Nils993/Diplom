<template>
  <section id="catalog" class="catalog center">
    <h2 class="catalog__title">Catalog</h2>
    <div class="catalog-list">
      <div
        @click="toggleSelection(watch)"
        :class="{ selected: selectedWatch === watch }"
        class="catalog-item"
        v-for="watch in watches"
        :key="watch.id"
      >
        <img class="catalog__img" :src="watch.src" alt="" />
        <h3 class="catalog-item__name">{{ watch.name }}</h3>
        <p class="catalog-item__price">{{ watch.price }}</p>
      </div>
    </div>
    <div class="catalog-wrap__btn">
      <button class="catalog__btn" @click="openBuyForm">Buy now</button>
    </div>
    <BuyComp
      v-if="showBuyForm && selectedWatch"
      :selectedWatch="selectedWatch"
      @closeForm="closeBuyForm"
    />
  </section>
</template>

<script>
import { mapState } from "vuex";
import BuyComp from "@/components/BuyComp.vue";

export default {
  components: {
    BuyComp,
  },
  data() {
    return {
      selectedWatch: null,
      showBuyForm: false,
    };
  },
  computed: {
    ...mapState(["watches"]),
  },
  methods: {
    toggleSelection(watch) {
      if (this.isSelected(watch)) {
        this.selectedWatch = null;
        this.showBuyForm = false;
      } else {
        this.selectedWatch = watch;
      }
    },
    isSelected(watch) {
      return this.selectedWatch === watch;
    },
    openBuyForm() {
      if (!this.selectedWatch) {
        alert("Please select a watch first.");
        return;
      }
      this.showBuyForm = true;
    },
    closeBuyForm() {
      this.showBuyForm = false;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
