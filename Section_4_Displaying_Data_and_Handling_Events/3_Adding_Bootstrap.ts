//npm install bootstrap --save 

// the --save flag also adds bootstrap as a dependency in package .json

/*
So, package.json. In the list of dependencies,
look, we have an entry for bootstrap, and here's the version number: ^5.1.3.

Now what is this ^ character here? Well, this version consists of three numbers: major.minor.patch number.

This ^ character means we can use the most recent major version. So we can use version 5.4, 5.5, 5.9,
but if there is a newer version, like version 6 or version 7, we are not going to install that.
We can upgrade to the most recent major version, in this case version 5.

Now what is the benefit of adding an entry package to json?

Well, let me check our application code into a source control management tool like git, we are not going to check in the node modules
folder. So this node_modules folder, includes lots of libraries and takes a fair amount of space on the disk. We don't want to check 
this into a source control repository. So by listing all the dependencies inside package.json, anyone who checks out this source 
code from a repository can simply go to the terminal and type 'npm install'. With this, npm, looks at package.json, and downloads all the
dependencies on this machine.

So, now we have installed bootstrap, next we need to import it's
StyleSheet into our styles.css. So let's go to styles.css.

and go to courses.component.ts
*/
