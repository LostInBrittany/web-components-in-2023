#/bin/bash
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd $SCRIPT_DIR;
if npm whoami  --registry http://localhost:4873 ;
then echo "Logged"
else npm adduser --registry http://localhost:4873
fi
./build-and-publish-vanilla.sh
./build-and-publish-stencil.sh
./build-and-publish-lit.sh
./build-and-publish-svelte.sh