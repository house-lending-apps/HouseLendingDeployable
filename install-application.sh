#!/usr/bin/env bash

#!/bin/bash

cd /opt/HouseLendingMain

export mongodbURL="mongodb://localhost:27017/house-lending-db"

echo "Home directory is: $HOME"
echo "install-application.sh: directory = $PWD"
echo "USER_CRED = b18290981a67975fe2378f54cdcce06f95aff077"
echo "REPOSITORY_NAME = https://$USER_CRED@github.com/house-lending-apps/HouseLendingMain.git"
echo "targetBranch = master"

echo "Starting to pull latest ... "

sudo git clone $REPOSITORY_NAME $targetBranch

npm install

npm run startApplication

