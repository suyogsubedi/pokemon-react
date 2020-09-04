# pokemon-react  
https://suyogsubedi.github.io/pokemon-react/  
Refresh the page and the app will decide a winner randomly on the basis of pokemon you got. First Row can be player 1 and the Second Row can be player 2  
This is a project made from a code along tutorial with Colt Stele  
# This was more for learning how to deploy react sites on  github.  

# The following is guide for myself to host React sites to github (can't host if it is private)  

1. Make a repo at github and then add the remote inside of the application  
2. Need to install a dependency  
        npm install gh-pages --save-dev  
3. Need to make some changes inside of the package.json after the package is installed  
4. On the top of the file "homepage": "http://suyogsubedi.github.io/{repo-name}",  
5.Need to add the following two lines inside of the scripts  
"scripts": {  
    "predeploy": "npm run build",  
    "deploy": "gh-pages -d build",  
    ...Here are some more lines which are already present  
    }  
6.Need to run npm deploy  
7.After run deploy process gets over push it to the github  
