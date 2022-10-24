#!/bin/bash
cd ./..;
npm init -y;
echo node_modules > .gitignore;
echo $1 > README.md