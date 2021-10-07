const { appendFile } = require('fs');
var GitHub = require('github-api');
var noAuth = new GitHub();

// // test
// exports.test = async function(req, res){
//     console.log(req.params);
// }


// 사용자 레포지토리 리스트 조회
exports.getUserRepositoryList = async function(req, res){
    var repositoryList = noAuth.getUser(`${req.params.userId}`);
    var repoInfo = {
        repoOwner: "",
        repository: {
            name: []
        }
    };

    repositoryList.listRepos(function(err,repos){
        repos.forEach((repo) => {
            console.log(`"${repo.name} " -- "${repo.owner.login}"`)
            repoInfo.repository.name.push(repo.name);
            //console.log(repoInfo.repository.name);
        })
        // repoInfo.repoOwner.push(repos.owner.login);
    })
    console.log(repoInfo);
}
