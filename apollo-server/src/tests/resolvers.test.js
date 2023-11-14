const resolvers = require('../resolvers');

describe('resolvers', () => {
  describe('Query.leagues', () => {
    it('should return the league list in alphabetical order', async () => {
      const getLeagues = jest
        .fn()
        .mockResolvedValueOnce([{ name: 'League-B' }, { name: 'League-A' }]);

      const leagues = await resolvers.Query.leagues(
        {},
        {},
        {
          dataSources: {
            leagueDataSource: {
              getLeagues,
            },
          },
        }
      );

      expect(leagues[0].name).toEqual('League-A');
    });
  });
});
