const { RESTDataSource } = require('apollo-datasource-rest');

class SportDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://mobile-interview-backend.theathletic.com/';
  }
}

exports.SportDataSource = SportDataSource;
