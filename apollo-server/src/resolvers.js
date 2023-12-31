const resolvers = {
  Article: {
    async author(source, _fields, { dataSources }) {
      return dataSources.authorDataSource.getAuthor(source.author.id);
    },
    async league(source, _fields, { dataSources }) {
      return dataSources.leagueDataSource.getLeague(source.league.id);
    },
    async team(source, _fields, { dataSources }) {
      return dataSources.teamDataSource.getTeam(source.team.id);
    },
  },
  Query: {
    async article(_root, { id }, { dataSources }) {
      return dataSources.articleDataSource.getArticle(id);
    },
    async articles(_root, { limit, offset }, { dataSources }) {
      const articles = await dataSources.articleDataSource.getArticles();
      const slicedArticles = articles
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(offset, offset + limit);  
      return slicedArticles;
    },
    async leagues(_root, _args, { dataSources }) {
      const leagues = await dataSources.leagueDataSource.getLeagues();
      leagues.sort((a, b) => a.name.localeCompare(b.name));
      return leagues;
    },
    async teams(_root, _args, { dataSources }) {
      return dataSources.teamDataSource.getTeams();
    },
  },
  Team: {
    async league(source, _fields, { dataSources }) {
      return dataSources.leagueDataSource.getLeague(source.league.id);
    },
  },
};

module.exports = resolvers;
