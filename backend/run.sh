#!/bin/bash -x
PWD=$(pwd)

uvicorn src.main:app --reload
