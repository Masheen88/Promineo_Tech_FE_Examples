https://masheen88.github.io/Cup-O-Coffee/About.html

This does not use a CDN and is using bootstrap 5.2.0

!!!-- One very important thing to note though, node_modules can get pretty large. --!!!

I would recommend having two repos of the project.
* A version you intend to 'show' ie. on gitpages. 
  - For this verison you will need to include an empty file called .nojekyll in the root. 
  - Do not include a .gitignore file.
  
* A version you intend to update/clone/etc. 
  - For this version you need to include the .gitignore file so node modules is not uploaded.
