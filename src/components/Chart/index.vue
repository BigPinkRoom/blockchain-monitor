<template>
  <b-container>
    <b-row>
      <b-col cols="12" v-for="chart in charts" :key="chart.id">
        <chart-module :title="chart.title" :type="chart.type" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import ChartMarketPrice from './components/ChartMarketPrice';
// import ChartDifficulty from './components/ChartDifficulty';
// import ChartCostPerTransaction from './components/ChartCostPerTransaction';
import ChartModule from './components/ChartModule';

export default {
  name: 'Chart',
  components: {
    ChartModule,
  },
  data() {
    return {
      charts: [
        { id: 1, title: 'Market price', type: 'MarketPrice' },
        { id: 2, title: 'Difficulty', type: 'Difficulty' },
        { id: 3, title: 'Cost per transaction', type: 'CostPerTransaction' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
