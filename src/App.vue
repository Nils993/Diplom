<template>
  <HeadComp />
  <PromoComp />
  <AboutUsComp />
  <CatalogComp />
  <NewWatchesComp />
  <SaleComp />
  <FooterComp />
</template>

<script>
import HeadComp from "./components/HeadComp.vue";
import AboutUsComp from "./components/AboutUsComp.vue";
import PromoComp from "./components/PromoComp.vue";
import CatalogComp from "./components/CatalogComp.vue";
import SaleComp from "./components/SaleComp.vue";
import FooterComp from "./components/FooterComp.vue";
import NewWatchesComp from "./components/NewWatchesComp.vue";

export default {
  name: "App",
  components: {
    HeadComp,
    PromoComp,
    AboutUsComp,
    CatalogComp,
    NewWatchesComp,
    SaleComp,
    FooterComp,
  },
};
</script>

<style></style>
