#!/bin/bash

npm run format
npm run lint
npm run build

# git add all changes
git add .
# commit changes with message that takes the version from package.json
git commit -m "build: release version $(node -p -e "require('./package.json').version")"
# push changes to the repository
git push origin main
# create a new tag with the version from package.json
git tag -a $(node -p -e "require('./package.json').version") -m "release version $(node -p -e "require('./package.json').version")"
# push the tag to the repository
git push origin $(node -p -e "require('./package.json').version")

# install in backend
cd ../W1Backend
npm install git+https://github.com/Wonnetix/W1Classes.git

# for some reason (probably due to the way lerna treats npm packages) the prisma client for individual 
# monorepo packages dissappear after installing/updating npm packages
# we must then recreate the prisma client for each individual monorepo package
cd ./packages/fast-gateway
npx prisma generate

cd ../../W1Classes