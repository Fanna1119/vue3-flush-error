<template>
  <canvas id="vue-slider" ref="sliderRef" width="300" height="300"></canvas>
  <button @click="valuechange(5)">dance monmek</button>
</template>

<script>
import CircularSlider from "@maslick/radiaslider";
import { onMounted, reactive, ref, toRefs, watch, watchEffect } from "vue";
export default {
  emits: ["sliderData"],
  props: {
    changevalue: {
      required: false,
      type: [Number, String],
    },
  },
  setup(props, { emit }) {
    const sliderRef = ref(null);

    const sliderdata = reactive({
      valuechange: (val) => sliderRef.value.setSliderValue("1", val),
    });

    let { changevalue } = toRefs(props);

    let { valuechange } = toRefs(sliderdata);

    onMounted(() => {
      //create slider instance
      sliderRef.value = new CircularSlider({
        canvasId: "vue-slider",
        continuousMode: false,
        vertical: false,
        readOnly: false,
      });

      //add slider to ref(sliderRef)
      sliderRef.value.addSlider({
        id: 1,
        width: 50,
        min: 0,
        max: 100,
        step: 1,
        color: "#104b63",
        changed: (v) => {
          emit("sliderData", v);
        },
        x0: 30,
        y0: 30,
      });
    });

    return {
      sliderRef,
      valuechange,
    };
  },
};
</script>

<style>
</style>