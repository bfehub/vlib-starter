<template>
  <CellGroup>
    <Cell v-for="i in 100" :key="i">Cell {{ i }}</Cell>
  </CellGroup>
  <BackTop />
</template>

<script lang="ts" setup>
import { CellGroup, Cell } from 'vant'
import { BackTop } from '@bfehub/vlib-ui'
</script>
