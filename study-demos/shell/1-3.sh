#!/bin/bash
#第一个打酱油的脚本,示例
echo 'decimal hex character'
for((i=20;i<=36;i++))
    do 
        echo $i | awk '{printf("%3d %2x %c\n",$1,$1,$1)}'
    done
exit 0