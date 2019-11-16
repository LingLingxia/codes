#!/bin/bash
git status
echo "input commit message"
read message
git add .
git commit -m message
git push