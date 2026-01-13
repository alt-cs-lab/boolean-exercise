<script setup>
/**
 * @file Karnaugh Map Component
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
  <h2>Karnaugh Map ({{ props.variables }} variables)</h2>
  <div v-if="props.variables === 2">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>B=0</th>
          <th>B=1</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>A=0</th>
          <td :style="'background-color: ' + colors[0]"><TruthValue :value="props.binarySet[0]" /></td>
          <td :style="'background-color: ' + colors[1]"><TruthValue :value="props.binarySet[1]" /></td>
        </tr>
        <tr>
          <th>A=1</th>
          <td :style="'background-color: ' + colors[2]"><TruthValue :value="props.binarySet[2]" /></td>
          <td :style="'background-color: ' + colors[3]"><TruthValue :value="props.binarySet[3]" /></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="props.variables === 3">
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th colspan="4">BC</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th>00</th>
          <th>01</th>
          <th>11</th>
          <th>10</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th rowspan="2">A</th>
          <th>0</th>
          <td :style="'background-color: ' + colors[0]"><TruthValue :value="props.binarySet[0]" /></td>
          <td :style="'background-color: ' + colors[1]"><TruthValue :value="props.binarySet[1]" /></td>
          <td :style="'background-color: ' + colors[3]"><TruthValue :value="props.binarySet[3]" /></td>
          <td :style="'background-color: ' + colors[2]"><TruthValue :value="props.binarySet[2]" /></td>
        </tr>
        <tr>
          <th>1</th>
          <td :style="'background-color: ' + colors[4]"><TruthValue :value="props.binarySet[4]" /></td>
          <td :style="'background-color: ' + colors[5]"><TruthValue :value="props.binarySet[5]" /></td>
          <td :style="'background-color: ' + colors[7]"><TruthValue :value="props.binarySet[7]" /></td>
          <td :style="'background-color: ' + colors[6]"><TruthValue :value="props.binarySet[6]" /></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="props.variables === 4">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>CD=00</th>
          <th>CD=01</th>
          <th>CD=11</th>
          <th>CD=10</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>AB=00</th>
          <td>{{ (props.value >> 0) & 1 }}</td>
          <td>{{ (props.value >> 1) & 1 }}</td>
          <td>{{ (props.value >> 3) & 1 }}</td>
          <td>{{ (props.value >> 2) & 1 }}</td>
        </tr>
        <tr>
          <th>AB=01</th>
          <td>{{ (props.value >> 4) & 1 }}</td>
          <td>{{ (props.value >> 5) & 1 }}</td>
          <td>{{ (props.value >> 7) & 1 }}</td>
          <td>{{ (props.value >> 6) & 1 }}</td>
        </tr>
        <tr>
          <th>AB=11</th>
          <td>{{ (props.value >> 12) & 1 }}</td>
          <td>{{ (props.value >> 13) & 1 }}</td>
          <td>{{ (props.value >> 15) & 1 }}</td>
          <td>{{ (props.value >> 14) & 1 }}</td>
        </tr>
        <tr>
          <th>AB=10</th>
          <td>{{ (props.value >> 8) & 1 }}</td>
          <td>{{ (props.value >> 9) & 1 }}</td>
          <td>{{ (props.value >> 11) & 1 }}</td>
          <td>{{ (props.value >> 10) & 1 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="props.variables < 2 || props.variables > 4">
    <p>Karnaugh Map not supported for {{ props.variables }} variables.</p>
  </div>
</template>