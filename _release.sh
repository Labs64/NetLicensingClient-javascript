#!/bin/sh

# install dependencies
npm install

# check outdated dependencies
npm outdated

# version input
echo Enter release version:
read version
if [ "$version" = "" ]; then
  echo "Error! Version cannot be empty."
  exit 1
fi

# start release
npm run test
npm run build
git commit -a -m "Prepare for release $version"
npm config set tag-version-prefix ''
npm version $version -m "Release $version"
git push origin master $version
