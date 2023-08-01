#!/bin/bash -x

WORK_DIR=$(pwd)
TEMP_DIR=$(mktemp -d)

RELEASE_DATE=$(date '+%F-%H-%M')

# setting zip path
zip_path="${TEMP_DIR}"/python-layer-${RELEASE_DATE}.zip

echo $zip_path 


dist_path="${TEMP_DIR}"/library

if [ ! -e "requirements.txt"]; then
  source ./lambda-env/bin/activate
  pip freeze > requirements.txt
  deactivate
fi

mkdir -p ${dist_path}
pip install -t ${dist_path} -r requirements.txt
cd ${dist_path}
zip ${zip_path} -r . || echo "zip Error"
cd ${WORK_DIR}
mv ${zip_path} .
echo ${zip_path} # e.g:/tmp/tmp.whZEKhn6ky/python-layer-2023-08-02-01-56.zip

## OKだね。mvはする必要が無いからここはまたいじる必要があるね。echo zip_pathでいいと思う。
## 正確に言うと、これはzipを作っただけだね。
