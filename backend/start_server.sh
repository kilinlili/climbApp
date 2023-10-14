#!/bin/bash -x
PWD=$(pwd)

uvicorn main:app --reload
