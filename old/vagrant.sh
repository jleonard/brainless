#!/usr/bin/env bash

apt-get update
apt-get install -y apache2
rm -rf /var/www
ln -fs /vagrant /var/www

sudo apt-get install -y build-essential curl chrpath git-core openssl libssl-dev libfontconfig1-dev

sudo apt-get install -y git

git clone https://github.com/joyent/node.git
cd node
git checkout v0.10.25
./configure
make
sudo make install

curl http://npmjs.org/install.sh | sudo sh

npm install -g yo bower docpad express forever grunt-cli gulp jade less node-dev selenium-server

git clone git://github.com/ariya/phantomjs.git
cd phantomjs
git checkout 1.9
./build.sh

git clone git://github.com/n1k0/casperjs.git
cd casperjs
git checkout tags/1.0.2
ln -sf `pwd`/bin/casperjs /usr/local/bin/casperjs

sudo apt-get -y install tree