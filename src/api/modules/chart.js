import ApiModule from '../module';
import chartServices from '@/services/chart';

class Chart extends ApiModule {
  async getMarketPrice(params) {
    const response = await this.request('/charts/market-price?format=json&cors=true', 'get', params);
    return chartServices.convertData(response);
  }

  async getDifficulty(params) {
    const response = await this.request('/charts/difficulty?format=json&cors=true', 'get', params);
    return chartServices.convertData(response);
  }

  async getCostPerTransaction(params) {
    const response = await this.request('/charts/cost-per-transaction?format=json&cors=true', 'get', params);
    return chartServices.convertData(response);
  }
}

export default new Chart();
