# PRE-REQUIREMENT
 * nodejs > 4.0.0 
Reference: ( https://nodejs.org/en/download/package-manager/ )
 * gulp
 * jspm

# INSTALL
sudo npm install -g jspm
sudo npm install -g gulp

git clone https://gitlab.com/hoya82/ib-react.git
cd ib-react
npm install
jspm install
gulp rebuild

Production file is at /app folder.
open http://your.domain/path/to/ib-react/app