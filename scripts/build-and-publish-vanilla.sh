#/bin/bash
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd $SCRIPT_DIR;
cd ../step-02/my-vanilla-counter/
npm i
if npm whoami  --registry http://localhost:4873 ;
then echo "Logged"
else npm adduser --registry http://localhost:4873
fi
npm publish --registry http://localhost:4873

