#!/bin/bash
#
set -x
echo -n "are you a student?"
read answer
#
if [ $answer = Y ]
    then
        echo "Yes"
    else
        echo "No"
fi
exit 0