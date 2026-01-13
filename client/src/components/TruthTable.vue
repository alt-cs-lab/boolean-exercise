<script setup>
/**
 * @file Truth Table Component
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
import TruthValue from '@/components/bool/TruthValue.vue'
</script>

<template>
  <h2>Truth Table ({{ props.variables}} variables)</h2>
  <div v-if="props.variables === 2">
    <table>
      <thead>
        <tr>
          <th>A</th>
          <th>B</th>
          <th>Output</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 4" :key="i" :style="'background-color: ' + props.colors[i-1]">
          <td><TruthValue :value="((i - 1) >> 1 & 1) == 1" /></td>
          <td><TruthValue :value="((i - 1) & 1) == 1" /></td>
          <td><TruthValue :value="props.binarySet[i-1]" /></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="props.variables === 3">
    <table>
      <thead>
        <tr>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>Output</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 8" :key="i" :style="'background-color: ' + props.colors[i-1]">
          <td><TruthValue :value="((i - 1) >> 2 & 1) == 1" /></td>
          <td><TruthValue :value="((i - 1) >> 1 & 1) == 1" /></td>
          <td><TruthValue :value="((i - 1) & 1) == 1" /></td>
          <td><TruthValue :value="props.binarySet[i-1]" /></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="props.variables === 4">
    <table>
      <thead>
        <tr>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
          <th>Output</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 16" :key="i" :style="'background-color: ' + props.colors[i-1]">
          <td><TruthValue :value="((i - 1) >> 3 & 1) == 1" /></td>
          <td><TruthValue :value="((i - 1) >> 2 & 1) == 1" /></td>
          <td><TruthValue :value="((i - 1) >> 1 & 1) == 1" /></td>
          <td><TruthValue :value="((i - 1) & 1) == 1" /></td>
          <td><TruthValue :value="props.binarySet[i-1]" /></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="props.variables < 2 || props.variables > 4">
    <p>Truth table not supported for {{ props.variables }} variables.</p>
  </div>
</template>