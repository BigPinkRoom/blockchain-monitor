<template>
  <b-container class="px-0">
    <b-row>
      <b-col class="mb-3" md="12" xl="4" v-for="chart in charts" :key="chart.id">
        <b-card no-body>
          <b-card-header>
            <b-card-title class="h6">{{ chart.title }}</b-card-title>
          </b-card-header>
          <chart-module :type="chart.type" />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
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
