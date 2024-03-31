FROM node:21-bookworm

# RUN apt-get update && apt-get install -y nodejs npm node-libnpx

# EXPOSE 3000

ENV PORT 3000
# # set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# CMD ["node"]
CMD ["sh", "-c", "while true; do sleep 3600; done"]