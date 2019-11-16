#!/bin/bash
#
echo "$0"
echo
#
if [ -n $1 ]
then
    echo "$1"
fi
#
if [ -n $2 ]
then 
    echo "$2"
fi
#
if [ -n $3 ]
then
    echo "$3"
fi

echo "all:$*"
echo "all:$@"
echo $1 $2 $3
echo $#

exit 0