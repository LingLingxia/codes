#!/bin/bash
# 啥玩意，没运行起来
ARGCOUNT=1
file_path=password
pattrn=$1
if [ $# -ne $ARGCOUNT]
then
  echo "`basename$0` USERNAME"
fi
file_index()
{
  while read line
  do
    echo $line | grep $1 |awk -F":"'{print $6}'
  done
} <$file_path
file_index $pattrn
exit 0