#!/bin/bash
arr=( a b c d e f g )
for v in ${arr[@]}
do
    echo $v
done
echo ${arr[@]}
exit 0;