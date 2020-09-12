# Stegchains
Files required for stegchains

Access Linux Ubuntu 

******Hyperledger Fabric Installation******

Prerequisites

	Install Git
		$ sudo apt-get install git
		Enter password
		Confirm

	Install cURL
		$ sudo apt install curl

	Install Docker and Docker Compose
		$ sudo apt install docker.io
   		$ sudo apt install docker-compose
		$ sudo usermod -a -G docker $USER
					*$USER is the user name used on the machine		
		$ sudo systemctl enable docker
		
		**RESTART MACHINE**

		$ sudo docker run hello-world

	Install GO Language
		$ sudo apt install golang-go
		$ export GOPATH=$HOME/go            
		$ export PATH=$PATH:$GOPATH/bin

	Install Node.js	
		$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
		$ sudo apt-get install -y nodejs
		
	Install NPM
		$ sudo apt install npm

	Install python2.7
		$ sudo apt-get install python

	Install Hyperledger Fabric
		$ curl -sSL https://bit.ly/2ysbOFE | bash -s
			
	Navigate to /home/fabric-samples/fabcar/javascript
		$ npm install


******MultiChain Installation******

		$ cd /tmp
		$ wget https://www.multichain.com/download/multichain-2.0.7.tar.gz
		$ tar -xvzf multichain-2.0.7.tar.gz
		$ cd multichain-2.0.7
		$ mv multichaind multichain-cli multichain-util /usr/local/bin

******Modules Installation******
	
	Install line-reader
		$ npm install line-reader
		
	Install expand-tilde
		$ npm install --save expand-tilde
		
	Install log4js
		$ npm install log4js



******Extracting Stegchain Files******

Extract all files from the folder “HOME” to /home/

Extract and replace all files from the folder “FABRIC1” to /home/fabric-samples/fabcar/javascript

Extract and replace all files from the folder “FABRIC2” to /home/fabric-samples/chaincode/fabcar/javascript/lib



******Commands To Create Stegchains Can Be Found In The StegchainsCommands Text File******
