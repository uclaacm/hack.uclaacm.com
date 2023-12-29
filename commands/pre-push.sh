#!/bin/bash

echo -e "===\n>> ACM Hack Pre-push Hook: Checking branch name for push to main. \n"

BRANCH=`git rev-parse --abbrev-ref HEAD`
PROTECTED_BRANCHES="^(nathan/protect_push_to_main)"

if [[ $1 != *"$BRANCH"* ]]
then
  echo -e "You must use (git push origin $BRANCH)\n" && exit 1
fi

if [[ "$BRANCH" =~ $PROTECTED_BRANCHES ]]
then
  echo -e "Cannot push to remote $BRANCH branch, please create your own branch and use a pull request." && exit 1
fi

echo -e ">> Branch name checked. Ok! \n==="

exit 0
