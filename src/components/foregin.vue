<template>
  <svg viewBox="0 0 200 200">
    <polygon points="5,5 195,10 185,185 10,195" />
    <foreignObject x="20" y="20" width="160" height="160">
      <div>
        {{ text }}
      </div>

      <div>
        <slot></slot>
      </div>
    </foreignObject>
  </svg>
  <input v-model="text" type="text" />
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const text = ref("hello");
    return {
      text,
    };
  },
};
</script>

<style scoped>
div {
  color: white;
  font: 18px serif;
  height: 100%;
  overflow: auto;
}
</style>