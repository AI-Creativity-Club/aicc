# Pushing to the repo and building the code   
### NPM   
- run ```npm install react``` and ```npm install gh-pages``` in the cloned repo.   
### Cloning the master repo   
- Clone the master with ```git clone <url>```   
- Make changes   
- ```git commit```, ```git push```   
### Building the code   
- run ```npm run deploy``` in the repos main directory   
- Done! The code should be updated to the gh-page branch and the changes should be reflected on the GitHub Page   
### Important: Debugging locally   
- To test and debug without pushing to the ```gh-pages``` branch (production build), run ```npm start``` locally within the GH repo and it will launch a react server within your own network hosted through your PC to test.   
- Note: Changes on this version will not affect production, to publish to the production build refer to the steps above. 
