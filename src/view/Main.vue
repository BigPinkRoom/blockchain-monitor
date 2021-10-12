<template>
  <div>
    <b-contaner>
      <b-row>
        <b-col>
          <v-header></v-header>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <v-chart></v-chart>
        </b-col>
      </b-row>
    </b-contaner>
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
