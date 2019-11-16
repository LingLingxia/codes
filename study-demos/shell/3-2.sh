#!/bin/bash
#
variable1_=$1
critical_argument01=$variable1_
variable1=${variable1_/_/}
echo $variable1
if [ -z $1 ]
then
    exit $MISSING_PARAM
fi
exit 0