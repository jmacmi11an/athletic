const { SportDataSource } = require('./sportDataSource');

class ArticleDataSource extends SportDataSource {
  async getArticle(id) {
    return this.get(`articles/${id}`);
  }
}

exports.ArticleDataSource = ArticleDataSource;
