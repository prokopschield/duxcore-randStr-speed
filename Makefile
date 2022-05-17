run: lib/cli.js
	node lib/cli.js

lib/cli.js: $(wildcard src/*) node_modules/
	tsc

node_modules/: package.json
	yarn
