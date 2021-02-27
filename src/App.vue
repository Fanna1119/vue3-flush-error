<template>
  <timer @sliderData="funcme" :changevalue="nummy" />

  <input v-model="nummy">
{{nummy}}
</template>

<script>
import { computed, ref, watch } from "vue";
import timer from "./components/timer.vue";

export default {
  components: {
    timer,
  },
  setup() {

    const nummy = ref(0);

    const funcme = (event) => {
      console.log(event);
    };

    return {
      funcme,
      nummy
    };
  },
};
</script>


<style scoped>
</style>