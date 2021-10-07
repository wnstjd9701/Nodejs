const { appendFile } = require('fs');
var GitHub = require('github-api');
var noAuth = new GitHub();

// 사용자 레포지토리 리스트 조회
exports.getUserRepositoryList = function(req, res){
    var repositoryList = noAuth.getUser(`${req.params.userId}`);

    repositoryList.listRepos(function(err,repos){
        repos.forEach((repo) => {
            console.log(`"${repo.name} " -- "${repo.owner.login}"`)
            repoInfo.repository.name.push(repo.name);
        })
        // repoInfo.repoOwner.push(repos.owner.login);
        res.json(repos);
    })
}
