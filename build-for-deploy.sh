if [ -z "$1" ]
then
  echo "image version is a required arg"
  exit 1
fi

set -x

rm -rf client/dist
(cd client; npm run build)
docker buildx build --force-rm --tag taylorjg/ohhell:$1 .
