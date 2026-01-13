<script setup>
/**
 * @file Main View
 * @author Russell Feldhausen <russfeld@ksu.edu>
 */

// Import Libraries
import { storeToRefs } from 'pinia'

// Import Components
import BooleanStatement from '@/components/BooleanStatement.vue'
import KarnaughMap from '@/components/KarnaughMap.vue'
import TruthTable from '@/components/TruthTable.vue'
import VennDiagram from '@/components/VennDiagram.vue'

// Import Stores
import { useBooleanStore } from '@/stores/BooleanStore.js'
const booleanStore = useBooleanStore()
const { value, variables, isColorSet, isBinarySet, hover } = storeToRefs(booleanStore)
booleanStore.reset(3)

function reset() {
  booleanStore.reset(3)
}
</script>

<template>
  <h1 @click="reset">Problem Number {{ value }}</h1>

  <TruthTable :binarySet="isBinarySet" :variables="variables" :colors="isColorSet" :hover="hover" :hoverOver="booleanStore.hoverOver"/>
  <KarnaughMap :binarySet="isBinarySet" :variables="variables" :colors="isColorSet" :hover="hover" :hoverOver="booleanStore.hoverOver"/>
  <VennDiagram :binarySet="isBinarySet" :variables="variables" :colors="isColorSet" :hover="hover" :hoverOver="booleanStore.hoverOver"/>
  <BooleanStatement :binarySet="isBinarySet" :variables="variables" :colors="isColorSet" :hover="hover" :hoverOver="booleanStore.hoverOver"/>
</template>