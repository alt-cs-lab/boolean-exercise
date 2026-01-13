<script setup>
/**
 * @file Boolean Statement Component
 * @author Russell Feldhausen <russfeld@ksu.edu>
 */

// Import Libraries

// Incoming Props
const props = defineProps({
  binarySet: {
    type: Array,
    required: true
  },
  colors: {
    type: Array,
    required: true,
  },
  variables: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <h2>Boolean Statement {{ props.value }} ({{ props.variables}} variables)</h2>
  <div v-if="props.variables === 2">
    <p>Boolean Statement for 2 variables is not yet implemented.</p>
  </div>
  <div v-if="props.variables === 3">
    <p>
      <span v-if="props.binarySet[0]" :style="'background-color: ' + props.colors[0]">(¬A ∧ ¬B ∧ ¬C)</span>
      <span v-if="props.binarySet[0] && props.binarySet.some((x, i) => i > 0 && x)">&nbsp;∨&nbsp;</span>
      <span v-if="props.binarySet[1]" :style="'background-color: ' + props.colors[1]">(¬A ∧ ¬B ∧ C)</span>
      <span v-if="props.binarySet[1] && props.binarySet.some((x, i) => i > 1 && x)">&nbsp;∨&nbsp;</span>
      <span v-if="props.binarySet[2]" :style="'background-color: ' + props.colors[2]">(¬A ∧ B ∧ ¬C)</span>
      <span v-if="props.binarySet[2] && props.binarySet.some((x, i) => i > 2 && x)">&nbsp;∨&nbsp;</span>
      <span v-if="props.binarySet[3]" :style="'background-color: ' + props.colors[3]">(¬A ∧ B ∧ C)</span>
      <span v-if="props.binarySet[3] && props.binarySet.some((x, i) => i > 3 && x)">&nbsp;∨&nbsp;</span>
      <span v-if="props.binarySet[4]" :style="'background-color: ' + props.colors[4]">(A ∧ ¬B ∧ ¬C)</span>
      <span v-if="props.binarySet[4] && props.binarySet.some((x, i) => i > 4 && x)">&nbsp;∨&nbsp;</span>
      <span v-if="props.binarySet[5]" :style="'background-color: ' + props.colors[5]">(A ∧ ¬B ∧ C)</span>
      <span v-if="props.binarySet[5] && props.binarySet.some((x, i) => i > 5 && x)">&nbsp;∨&nbsp;</span>
      <span v-if="props.binarySet[6]" :style="'background-color: ' + props.colors[6]">(A ∧ B ∧ ¬C)</span>
      <span v-if="props.binarySet[6] && props.binarySet.some((x, i) => i > 6 && x)">&nbsp;∨&nbsp;</span>
      <span v-if="props.binarySet[7]" :style="'background-color: ' + props.colors[7]">(A ∧ B ∧ C)</span>
    </p>
  </div>
  <div v-if="props.variables === 4">
    <p>Boolean Statement for 4 variables is not yet implemented.</p>
  </div>
  <div v-if="props.variables < 2 || props.variables > 4">
    <p>Boolean Statement not supported for {{ props.variables }} variables.</p>
  </div>
</template>