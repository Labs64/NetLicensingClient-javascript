#!/bin/sh

# install dependencies
npm install
npm install -g gulp

# check if testing is needed before release
echo Do you want run test before release start? [yes/no]
read test
if [ "$test" == "y" ] || [ "$test" == "yes" ] ; then
  gulp test
fi

# version input
echo Enter release version:
read version
if [ "$version" = "" ]; then
  echo "Error! Version cannot be empty."
  exit 1
fi

# start release
gulp dist
git commit -a -m "Prepare for release $version"
npm config set tag-version-prefix ''
npm version $version -m "Release $version"
git push origin master $version
