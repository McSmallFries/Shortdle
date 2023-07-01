class Controller  {
    games = ['worldle', 'wordle'];
    gameObjects = [new Worldle(), new Wordle()];

    splitUrl(url)  {
      const url = 'http://www.meepandmorp.com/222';
      const regex = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/igm;
      const splitUrl = url.match(regex);
      return domains = splitUrl.split('.');
    };
  
    /** Only runs on recognised games. */
    processSplitUrl(str)  {
      const found = this.games.find(str); 
      switch (found)  {
        case games[0]: {
          let worldle = this.gameObjects[0];
          worldle.executeResults();
          return worldle.shortResults
        };
        case games[1]: {
          let wordle = this.gameObjects[1];
          wordle.executeResults();
          return wordle.shortResults;
        }
        default: {
          break;
        }
      }
    }
  
    assignGames()  {
      let names = this.splitUrl(this.url);
      let resultStrings = [];
      names.array.forEach(str => {
        resultStrings += this.processSplitUrl(str) + '\n';
      });
      
    }
}