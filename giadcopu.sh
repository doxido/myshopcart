#! /usr/bin/bash

echo add
git add .


echo commit
git commit -m "$1"

echo push
sudo git push -u origin $2


