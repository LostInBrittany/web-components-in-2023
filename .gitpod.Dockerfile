ARG GITPOD_IMAGE=gitpod/workspace-node:latest
FROM ${GITPOD_IMAGE}

RUN npm install --global verdaccio
