<script setup>
/**
 * @file Truth Value component
 * @author Russell Feldhausen <russfeld@ksu.edu
 */

// Incoming Props
const props = defineProps({
  value: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <span>{{ props.value ? 'True' : 'False' }}</span>
</template>