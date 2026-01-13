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
  },
  hover: {
    type: Number,
    required: true
  },
  hoverOver: {
    type: Function,
    required: true
  }
})

function onHover(value) {
  props.hoverOver(value)
}

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
          <td :style="'background-color: ' + colors[0] + '; font-weight: ' + (props.hover == 0 ? 'bold' : 'normal')" @mouseenter="onHover(0)"><TruthValue :value="props.binarySet[0]" /></td>
          <td :style="'background-color: ' + colors[1] + '; font-weight: ' + (props.hover == 1 ? 'bold' : 'normal')" @mouseenter="onHover(1)"><TruthValue :value="props.binarySet[1]" /></td>
        </tr>
        <tr>
          <th>A=1</th>
          <td :style="'background-color: ' + colors[2] + '; font-weight: ' + (props.hover == 2 ? 'bold' : 'normal')" @mouseenter="onHover(2)"><TruthValue :value="props.binarySet[2]" /></td>
          <td :style="'background-color: ' + colors[3] + '; font-weight: ' + (props.hover == 3 ? 'bold' : 'normal')" @mouseenter="onHover(3)"><TruthValue :value="props.binarySet[3]" /></td>
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
          <td :style="'background-color: ' + colors[0] + '; font-weight: ' + (props.hover == 0 ? 'bold' : 'normal')" @mouseenter="onHover(0)"><TruthValue :value="props.binarySet[0]" /></td>
          <td :style="'background-color: ' + colors[1] + '; font-weight: ' + (props.hover == 1 ? 'bold' : 'normal')" @mouseenter="onHover(1)"><TruthValue :value="props.binarySet[1]" /></td>
          <td :style="'background-color: ' + colors[3] + '; font-weight: ' + (props.hover == 3 ? 'bold' : 'normal')" @mouseenter="onHover(3)"><TruthValue :value="props.binarySet[3]" /></td>
          <td :style="'background-color: ' + colors[2] + '; font-weight: ' + (props.hover == 2 ? 'bold' : 'normal')" @mouseenter="onHover(4)"><TruthValue :value="props.binarySet[2]" /></td>
        </tr>
        <tr>
          <th>1</th>
          <td :style="'background-color: ' + colors[4] + '; font-weight: ' + (props.hover == 4 ? 'bold' : 'normal')" @mouseenter="onHover(4)"><TruthValue :value="props.binarySet[4]" /></td>
          <td :style="'background-color: ' + colors[5] + '; font-weight: ' + (props.hover == 5 ? 'bold' : 'normal')" @mouseenter="onHover(5)"><TruthValue :value="props.binarySet[5]" /></td>
          <td :style="'background-color: ' + colors[7] + '; font-weight: ' + (props.hover == 7 ? 'bold' : 'normal')" @mouseenter="onHover(7)"><TruthValue :value="props.binarySet[7]" /></td>
          <td :style="'background-color: ' + colors[6] + '; font-weight: ' + (props.hover == 6 ? 'bold' : 'normal')" @mouseenter="onHover(6)"><TruthValue :value="props.binarySet[6]" /></td>
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
          <td :style="'background-color: ' + colors[0] + '; font-weight: ' + (props.hover == 0 ? 'bold' : 'normal')" @mouseenter="onHover(0)"><TruthValue :value="props.binarySet[0]" /></td>
          <td :style="'background-color: ' + colors[1] + '; font-weight: ' + (props.hover == 1 ? 'bold' : 'normal')" @mouseenter="onHover(1)"><TruthValue :value="props.binarySet[1]" /></td>
          <td :style="'background-color: ' + colors[3] + '; font-weight: ' + (props.hover == 3 ? 'bold' : 'normal')" @mouseenter="onHover(3)"><TruthValue :value="props.binarySet[3]" /></td>
          <td :style="'background-color: ' + colors[2] + '; font-weight: ' + (props.hover == 2 ? 'bold' : 'normal')" @mouseenter="onHover(2)"><TruthValue :value="props.binarySet[2]" /></td>
        </tr>
        <tr>
          <th>AB=01</th>
          <td :style="'background-color: ' + colors[4] + '; font-weight: ' + (props.hover == 4 ? 'bold' : 'normal')" @mouseenter="onHover(4)"><TruthValue :value="props.binarySet[4]" /></td>
          <td :style="'background-color: ' + colors[5] + '; font-weight: ' + (props.hover == 5 ? 'bold' : 'normal')" @mouseenter="onHover(5)"><TruthValue :value="props.binarySet[5]" /></td>
          <td :style="'background-color: ' + colors[7] + '; font-weight: ' + (props.hover == 7 ? 'bold' : 'normal')" @mouseenter="onHover(7)"><TruthValue :value="props.binarySet[7]" /></td>
          <td :style="'background-color: ' + colors[6] + '; font-weight: ' + (props.hover == 6 ? 'bold' : 'normal')" @mouseenter="onHover(6)"><TruthValue :value="props.binarySet[6]" /></td>
        </tr>
        <tr>
          <th>AB=11</th>
          <td :style="'background-color: ' + colors[12] + '; font-weight: ' + (props.hover == 12 ? 'bold' : 'normal')" @mouseenter="onHover(12)"><TruthValue :value="props.binarySet[12]" /></td>
          <td :style="'background-color: ' + colors[13] + '; font-weight: ' + (props.hover == 13 ? 'bold' : 'normal')" @mouseenter="onHover(13)"><TruthValue :value="props.binarySet[13]" /></td>
          <td :style="'background-color: ' + colors[15] + '; font-weight: ' + (props.hover == 15 ? 'bold' : 'normal')" @mouseenter="onHover(15)"><TruthValue :value="props.binarySet[15]" /></td>
          <td :style="'background-color: ' + colors[14] + '; font-weight: ' + (props.hover == 14 ? 'bold' : 'normal')" @mouseenter="onHover(14)"><TruthValue :value="props.binarySet[14]" /></td>
        </tr>
        <tr>
          <th>AB=10</th>
          <td :style="'background-color: ' + colors[8] + '; font-weight: ' + (props.hover == 8 ? 'bold' : 'normal')" @mouseenter="onHover(8)"><TruthValue :value="props.binarySet[8]" /></td>
          <td :style="'background-color: ' + colors[9] + '; font-weight: ' + (props.hover == 9 ? 'bold' : 'normal')" @mouseenter="onHover(9)"><TruthValue :value="props.binarySet[9]" /></td>
          <td :style="'background-color: ' + colors[11] + '; font-weight: ' + (props.hover == 11 ? 'bold' : 'normal')" @mouseenter="onHover(11)"><TruthValue :value="props.binarySet[11]" /></td>
          <td :style="'background-color: ' + colors[10] + '; font-weight: ' + (props.hover == 10 ? 'bold' : 'normal')" @mouseenter="onHover(10)"><TruthValue :value="props.binarySet[10]" /></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="props.variables < 2 || props.variables > 4">
    <p>Karnaugh Map not supported for {{ props.variables }} variables.</p>
  </div>
</template>