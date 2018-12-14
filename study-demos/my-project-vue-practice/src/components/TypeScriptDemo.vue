<template>
  <div>
    234{{msg}}
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class ABC extends Vue{
  msg = 12
};
</script>

