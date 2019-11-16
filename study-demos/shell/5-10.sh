#!/bin/bash
declare -i x=0
declare -i sum=0
while((x<5))
do
    let sum+=1
    let ++x
done
echo $sum
while read line
do
    echo $line
done 
exit 0