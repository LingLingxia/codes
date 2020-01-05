#!/bin/bash
hello()
{
  echo "Hello,today is `date`"
  echo "Welcome back"
  echo "$1 $2"
  return 7
}
hello u a
echo $?
exit 0 