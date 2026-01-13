<script setup>
/**
 * @file Venn Diagram Component
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

// Import Components
import VennThree from '@/components/venn/VennThree.vue'
</script>

<template>
  <h2>Venn Diagram ({{ props.variables}} variables)</h2>
  <div v-if="props.variables === 2">
    <p>Venn Diagram for 2 variables is not yet implemented.</p>
  </div>
  <div v-if="props.variables === 3">
    <VennThree :binarySet="binarySet" :colors="colors"/>
  </div>
  <div v-if="props.variables === 4">
    <p>Venn Diagram for 4 variables is not yet implemented.</p>
  </div>
  <div v-if="props.variables < 2 || props.variables > 4">
    <p>Venn Diagram not supported for {{ props.variables }} variables.</p>
  </div>
</template>