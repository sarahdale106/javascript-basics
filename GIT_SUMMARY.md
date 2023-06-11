This is a summary of how to create a local repo, a remote repo and then push the local commit.
--LOCAL--
Create a local repo by using git init
Create a local README.md and .gitignore
Create a PASSWORD.md file 
  Login to GitHub. Go to upper right profile picture and select "settings". Go to "developer settings", then "personal access tokens". 
  Click Tokens (classic) and create a note "personal use". Check the boxes for all the scopes and then "Generate Token".
  Copy the token and add it to the local PASSWORD.md file. This token does exprire, so if I haven't committed recently, I may have to
  repeat these steps to generate a new token
Make sure to inititalize the user.name and user.email at the git config --global level
Use git add to add files to stage
Use git commit -m 'Message here'
--REMOTE--
Login to GitHub
Add a new repo
Do NOT check "Initialize this repo with a REAMDE"
Just click "Create Repository" which will give instructions to "git remote add origin.." and "git push -u origin main"
Can copy the code tot he terminal window
Will ask for login name and password (the Token)
Check remote repo for the pushed files
---Adding a folder---
if made any changes to remote repository, will need to merge the remote changes with the local before a "push"
git config pull.rebase false (merges and not rebases)
git add (the local folder and any other updated files)
git commit -m (message)
git push -u origin main
