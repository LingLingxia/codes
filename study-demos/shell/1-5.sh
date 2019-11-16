#!/bin/bash
#还没运行过
old_file=$1
new_file=$2
if[$# -ne 3]
then
    echo "old_file new_file file_name"
    exit
fi
#
if[-f $3]
then
    file_name=$3
else
    echo "\"$3\" does not exist"
    exit
fi
#
sed -e "s/$old_file/$new_file/g" $file_name
exit 0