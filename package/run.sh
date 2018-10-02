docker build -t alpine/nodejs .
docker run -d -p 9000:3000 alpine/nodejs
firefox 127.0.0.1:9000 &
