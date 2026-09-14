# Real gcc, no Docker-in-Docker needed here — this container IS the sandbox.
# Isolation is process-level (see sandbox.js): unique temp dir per run, enforced
# compile/execute timeouts that actually kill the process, and an output-size cap.
# That's the same model already verified locally; it's what's realistic on a free
# hosting tier that doesn't grant privileged/nested-container access.
FROM node:20-bookworm-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends gcc libc6-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

ENV PORT=4000
EXPOSE 4000

CMD ["node", "server.js"]
