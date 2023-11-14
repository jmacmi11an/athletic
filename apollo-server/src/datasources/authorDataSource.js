const { SportDataSource } = require('./sportDataSource');

class AuthorDataSource extends SportDataSource {
  async getAuthor(id) {
    return this.get(`authors/${id}`);
  }
}

exports.AuthorDataSource = AuthorDataSource;
