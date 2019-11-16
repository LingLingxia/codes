#!/bin/bash
# if else while
while ((1))
do
    read x
    if [ $x = 0 ]
        then
            exit 0
    fi
    if [ $x -eq 5 ]
        then echo "true"
    elif [ $x -eq 666 ]
        then echo "good"
    else 
        echo $x
    fi
done
exit 0