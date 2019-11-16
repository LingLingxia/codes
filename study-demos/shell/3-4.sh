#!/bin/bash
#
line=1
echo "listing vars with $@ :"
for var in $@
do
    echo "var #$line=$var"
    let line+=1
done
exit 0