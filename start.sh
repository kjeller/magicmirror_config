#!/usr/bin/env bash

# run as client by default
if [ "$1" == "server" ]; then
MODE=mmserver
else
MODE=mmclient
fi

echo "Starting Magic Mirror as $MODE"
docker-compose -f docker-compose_$MODE.yml --env-file ./secret/secret.env up -d
