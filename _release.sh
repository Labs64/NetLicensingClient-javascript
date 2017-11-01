#!/bin/sh

# install dependencies
npm install
if ! type "gulp" > /dev/null; then
 echo "Install gulp globally"
 npm install -g gulp;
fi

# check outdated dependencies
npm outdated

# check if testing is needed before release
echo Do you want run test before release start? [yes/no]
read dotest
if [ "$dotest" = "y" ] || [ "$dotest" = "yes" ] ; then
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
