<template>
  <canvas id="vue-slider" ref="sliderRef" width="300" height="300"></canvas>
</template>

<script>
import CircularSlider from "@maslick/radiaslider";
import { onMounted, ref, toRefs, watch, watchEffect } from "vue";
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

    let { changevalue } = toRefs(props);

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

    //error occurs here.
    watch(
      changevalue,
      (val) => {
        //watch runs fine the first time.
        //second change of the watch value throws errors

        //`Unhandled error during execution of scheduler flush. This is likely a Vue internals bug.`.
        sliderRef.value.setSliderValue("1", val);
        //second watch throws:
        //TypeError: sliderRef.value.setSliderValue is not a function
      }
      // { deep: true }
    );

    return {
      sliderRef,
    };
  },
};
</script>

<style>
</style>