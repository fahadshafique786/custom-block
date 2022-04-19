# "RF-Custom-Block" Plugin Developed By "TechnologyBae"

## Description

This plugin adds a custom Gutenberg blocks in the Gutenberg editor of your WordPress dashboard. 


## Installation Steps :

1. Download the zipped plugin. Unzip the plugin.
2. Navigate to the __Plugins > Add new__ screen in your WordPress administrative dashboard.
3. Click __Add New__ at the top of the page.
3. Click __Upload Plugin__ at the top of the page.
4. Click __Choose File__, then find and __Upload__ the downloaded renamed zip file.
5. After the plugin finishes installing, click __Activate__.



## Scripts

1. `npm install` or  `npm i --save -dev @wordpress/scripts` in  your active plugin directory 
2. `npm run start` : will use the `src/index.js` as entry point and output it to `build/index.js` for development
3. `npm run build` : will use the `src/index.js` as entry point and output it to `build/index.js` for production


## Directory Structure

```ruby
├── build
│   └── index.js
├── node_modules
├── package-lock.json
├── package.json
└── src
    ├── editor.css
    ├── index.js
    └── style.css
├── custom-functions.php
├── index.php