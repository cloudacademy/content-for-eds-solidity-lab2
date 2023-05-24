one:
	mkdir -p ../challenge/one/
	mkdir -p ../challenge/one/contracts
	cp ../src/contracts/Variables.sol ../challenge/one/contracts/
	cp ../src/hardhat.config.js ../challenge/one/
	cp test_one.js ../challenge/one/
	(cd ../challenge/one/ && npx hardhat compile && npx hardhat test test_one.js)

install:
	npm install
	ls

two:
	mkdir -p contracts
	cp ../src/contracts/Variables.sol contracts/
	ls
	npx hardhat test test_two.js


three:
	mkdir -p contracts
	cp ../src/contracts/Variables.sol contracts/
	npm install
	ls
	npx hardhat test test_two.js

four:
	mkdir -p ../contracts
	cp ../src/contracts/Variables.sol ../contracts/
	cp test_two.js ../
	cp hardhat.config.js ../
	pwd
	(cd /root/lab  && npx hardhat test test_two.js)

five:
	mkdir -p ../challenge/three/
	cp ../src/challenge_one.js ../challenge/three/
	npx jest

six:
	mkdir -p ../challenge/three/
	cp ../src/challenge_one.js ../challenge/three/
	npx jest
	ls