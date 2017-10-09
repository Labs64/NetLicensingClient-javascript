#!/bin/sh

#Check if need testing before release

echo Do you want run test before release [yes/no]?
read test

if [ "$test" == "y" ] || [ "$test" == "yes" ] ; then
  gulp test
fi

#Version input
echo Type release version:?
read version

if [ "$version" = "" ]; then
     echo "Error! Version is empty"
     exit 1
fi

#Start release
gulp dist
git commit -a -m "Prepare dist for release $version"
npm config set tag-version-prefix ''
npm version $version
git push origin master