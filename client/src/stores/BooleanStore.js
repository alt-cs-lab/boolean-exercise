/**
 * @file Boolean Store
 * @author Russell Feldhausen <russfeld@ksu.edu>
 */

// Import Libraries
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBooleanStore = defineStore('boolean', () => {
  // State Properties
  const variables = ref(3)
  const value = ref(0)
  const hover = ref(-1)

  // Color Palette
  // https://colorkit.co/palette/e9162d-f28200-ffdb28-1fb819-00e1da-007bd8-8f2be7-fb4fd9/
  // https://colorkit.co/palette/ff6a6a-ffd09a-fdff9a-a9ff95-88f5ff-98bfff-a294ff-ffadff/
  const colors = ref([
    "#e9162d",
    "#f28200",
    "#ffdb28",
    "#1fb819",
    "#00E1DA",
    "#007BD8",
    "#8F2BE7",
    "#FB4FD9",
    "#FF6A6A",
    "#FFD09A",
    "#FDFF9A",
    "#A9FF95",
    "#88F5FF",
    "#98BFFF",
    "#A294FF",
    "#FFADFF"
  ])

  // Getters
  // Get an array of the "set" bits in the value
  const isBinarySet = computed(() => {
    const result = []
    const numBits = Math.pow(2, variables.value)
    for (let i = 0; i < numBits; i++) {
      if ((value.value & (1 << i)) !== 0) {
        result.push(true)
      } else {
        result.push(false)
      }
    }
    return result
  })

  const isColorSet = computed(() => {
    const result = []
    const numBits = Math.pow(2, variables.value)
    for (let i = 0; i < numBits; i++) {
      if ((value.value & (1 << i)) !== 0) {
        result.push(colors.value[i])
      } else {
        result.push('white')
      }
    }
    return result
  })

  // Actions
  function reset(vars) {
    variables.value = vars
    // set value to random value between 0 and 2^(2^variables)-1
    value.value = Math.floor(Math.random() * Math.pow(2, Math.pow(2, variables.value)))
  }

  function hoverOver(value) {
    hover.value = value
  }

  return { variables, value, colors, hover, isColorSet, isBinarySet, reset, hoverOver }
})