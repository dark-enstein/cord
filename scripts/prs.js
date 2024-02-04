// come back to this
import 'dotenv/config'
import { Octokit } from "@octokit/rest"

const octokit = new Octokit({
    auth: process.env.GH_API_KEY
  })
  
await octokit.request('GET /repos/dark-enstein/scour/pulls', {
    owner: 'dark-enstein',
    repo: 'scour',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }.then(res => console.log(res)
).catch(err => console.log(err))
})