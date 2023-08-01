#!/bin/bash -x

FILE="requirements.txt"

if [ ! -f $FILE ]; then
  echo "Nothing requirements File!"
  exit 1
fi

TARGET="lambda-env"

if [ -d $TARGET ]; then
  echo "lambda-env is exist."
  exit 0
fi

echo "make './lambda-env' for python execution environment. "
python -m venv lambda-env
source ./lambda-env/bin/activate
pip install -r ./requirements.txt

echo "setting requirement.\n let's programming."