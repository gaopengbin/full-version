<template>
  <div>
    <ThematicSamples v-if="current === '1'" />
    <SIRModel v-if="current === '2'" />
    <GeneticDistance v-if="current === '3'" />
    <RandomForest v-if="current === '4'" />
    <Aerosol v-if="current === '5'" />
    <MaxEntropy v-if="current === '6'" />
  </div>
</template>

<script setup lang="ts">
import ThematicSamples from "./ThematicSamples.vue";
import SIRModel from "./SIRModel.vue";
import GeneticDistance from "./GeneticDistance.vue";
import RandomForest from "./RandomForest.vue";
import Aerosol from "./Aerosol.vue";
import MaxEntropy from "./MaxEntropy.vue";
defineProps({
  current: {
    type: String,
    default: "1",
  },
});
</script>

<style scoped></style>
