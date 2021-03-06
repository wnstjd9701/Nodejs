const github = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  redirectUri: 'http://localhost:5000/auth/github/callback',
};
// github Login
module.exports = {
  get: (req, res) => {
    const githubAuthUrl = 'https://github.com/login/oauth/authorize?client_id=' + github.clientID + '&redirect_uri=' + github.redirectUri;

    res.redirect(githubAuthUrl);
  },
};
