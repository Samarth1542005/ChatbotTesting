require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubdata = {
    "login": "Samarth1542005",
    "id": 157493139,
    "node_id": "U_kgDOCWMnkw",
    "avatar_url": "https://avatars.githubusercontent.com/u/157493139?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Samarth1542005",
    "html_url": "https://github.com/Samarth1542005",
    "followers_url": "https://api.github.com/users/Samarth1542005/followers",
    "following_url": "https://api.github.com/users/Samarth1542005/following{/other_user}",
    "gists_url": "https://api.github.com/users/Samarth1542005/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Samarth1542005/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Samarth1542005/subscriptions",
    "organizations_url": "https://api.github.com/users/Samarth1542005/orgs",
    "repos_url": "https://api.github.com/users/Samarth1542005/repos",
    "events_url": "https://api.github.com/users/Samarth1542005/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Samarth1542005/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Samarth Jagdish Raut",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-01-23T12:52:52Z",
    "updated_at": "2026-01-18T11:14:02Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter' , (req, res) => {
    res.send('<h1> Samarth Raut </h1>')
})
app.get('/github', (req,res) => {
    res.json(githubdata)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
