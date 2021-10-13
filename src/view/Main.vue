<template>
  <div>
    <b-container class="px-0" fluid>
      <b-row>
        <b-col>
          <v-header></v-header>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col>
          <v-chart></v-chart>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Chart from '@/components/Chart';

export default {
  name: 'Main',
  components: {
    vHeader: Header,
    vChart: Chart,
  },
};
</script>

<style lang="scss"></style>
