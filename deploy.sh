#!/bin/sh

ssh -o StrictHostKeyChecking=no ec2-user@$EC2_PUBLIC_IP_ADDRESS  << 'ENDSSH'
  cd /home/ec2-user/giftiglobal
  export $(cat .env | xargs)
  docker login -u $CI_REGISTRY_USER -p $CI_JOB_TOKEN $CI_REGISTRY
  docker stop gifti-global
  docker rm gifti-global
  docker image rm $IMAGE
  docker pull $IMAGE:latest
  docker run --name gifti-global -d -p 8000:8000 $IMAGE:latest
ENDSSH
