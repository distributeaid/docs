```
# ssh into the server
ssh [ip address]

# change to the deploy user
sudo su - deploy

# update the relevant branch
cd ./next-website-v2/
git branch
git checkout main # or the branch you want
git pull
yarn install

# build and deploy the site
yarn build
pm2 list
pm2 restart 0 # or id of instance you want to restart

# visit the site to make sure it works

# log out of the deploy user, and optionally the server
exit
exit
``

