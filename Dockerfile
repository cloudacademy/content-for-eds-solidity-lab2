FROM 421805900968.dkr.ecr.us-east-2.amazonaws.com/cloudacademy/labs-workspace/ca-theia-express-node-18v2
USER root
WORKDIR /root/lab/
COPY ["src/package.json", "src/package-lock.json*", "./"]
RUN npm install
COPY src ./src
COPY test ./test