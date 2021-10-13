<template>
  <div id="chart">
    <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import Apexchart from 'vue-apexcharts';
import api from '@/api';
import { getOptions } from './settings/ChartModuleConfiguration';

export default {
  name: 'ChartModule',
  components: {
    Apexchart,
  },
  props: {
    title: String,
    type: String,
  },

  data() {
    return {
      counter: null,
      series: [
        {
          name: '',
          data: [],
        },
      ],
      categories: [],
    };
  },
  computed: {
    chartOptions() {
      const settings = {
        title: this.title,
        categories: this.categories,
      };

      return getOptions(settings);
    },
  },
  methods: {
    async getChartData() {
      const response = await api.chart[`get${this.type}`]();

      this.series[0].data = response.seriesData;
      this.categories = response.categories;
    },
  },
  mounted() {
    this.getChartData();
  },
};
</script>

<style lang="scss" scoped></style>
