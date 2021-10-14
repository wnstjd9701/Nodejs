const { appendFile } = require('fs');
var GitHub = require('github-api');
var noAuth = new GitHub();

// 사용자 레포지토리 리스트 조회
getUserRepositoryList = function (req, res) {
  var repositoryList = noAuth.getUser(`${req.params.userId}`);
  var arr = [];
  var obj = {
    user: req.params.userId,
    arr2: [],
  };
  repositoryList.listRepos(function (err, repos) {
    repos.forEach((repo) => {
      //console.log(`"${repo.name} " -- "${repo.owner.login}"`);
      //console.log(`"${repo.languages_url}`);
      arr.push(repo.languages_url);
    });
    obj.arr2 = arr;
    console.log(obj.arr2);
    res.json(obj);
  });
};
module.exports = {
  getUserRepositoryList,
};
