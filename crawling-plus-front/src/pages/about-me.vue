<template>
  <CHeader />
  <AboutMe />
  <Content />
</template>

<script>
import CHeader from "@/components/basic/c-header.vue";
import AboutMe from "@/components/about/about-me-slider.vue";
import Content from "@/components/about/about-me-content.vue";
export default {
  components: {
    CHeader,
    AboutMe,
    Content,
  },
};
</script>

<style>
</style>