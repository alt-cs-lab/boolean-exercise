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
const { value, variables, isColorSet, isBinarySet } = storeToRefs(booleanStore)
booleanStore.resetThree()
</script>

<template>
  <h1 @click="booleanStore.resetThree">Problem Number {{ value }}</h1>

  <TruthTable :binarySet="isBinarySet" :variables="variables" :colors="isColorSet"/>
  <KarnaughMap :binarySet="isBinarySet" :variables="variables" :colors="isColorSet"/>
  <VennDiagram :binarySet="isBinarySet" :variables="variables" :colors="isColorSet"/>
  <BooleanStatement :binarySet="isBinarySet" :variables="variables" :colors="isColorSet"/>
</template>