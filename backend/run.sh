#!/bin/bash -x
PWD=$(pwd)

cd ${PWD}/src
uvicorn main:app --reload
