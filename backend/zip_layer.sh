#!/bin/bash

TEMP_DIR=$(mktemp -d)

RELEASE_DATE=$(date '+%F-%H-%M')

# setting zip path
zip_path="${TEMP_DIR}"/layer-${RELEASE_DATE}.zip

echo $zip_path 

LIB_PATH=python/lib/python3.10/site-packages
package_path="${TEMP_DIR}"/"${LIB_PATH}"

if [ ! -e "requirements.txt"]; then
  source ./lambda-env/bin/activate
  pip freeze > requirements.txt
  deactivate
fi

mkdir -p "${package_path}"
pip install -t ${package_path} -r requirements.txt
cd ${TEMP_DIR}
zip -r ${zip_path} ${LIB_PATH} || echo "zip Error"
mv ${zip_path} ~/desktop # case: for use local check
echo ${zip_path} # e.g:/tmp/tmp.whZEKhn6ky/python-layer-2023-08-02-01-56.zip
