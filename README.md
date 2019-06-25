# WCEU 2019 Block
Block to be created during the Gutenberg block creation workshop on the WordCamp Europe 2019, in Berlin, Germany.

The slides shown during the workshop can be [found here](https://speakerdeck.com/eliorivero/creating-a-gutenberg-block-wceu-2019).

# Installing

Clone this repo to your `wp-content/plugins/` directory.

Go to `WP Admin > Plugins` and activate it.

# Building

Go into the cloned directory, and run `yarn install` to download all dependencies.

Run `yarn build` to build the block code ready for production.

Run `yarn watch` to watch and continuously build a development version of the block code.

# File structure

The main file, `wceu-2019-bloq.php` loads the JS and CSS needed for the block, either in the editor or the front end.

The files `package.json`, `webpack.config.js`, `.babelrc`, are needed to download the required JS packages, build the JS and SCSS, and translate ESNext syntax into ES5. The entry point for the build is the file `main.js`, that import the block definitions and registers each block.

The numbered folders are sequential stages in the the block creation. The folder `skill-bar-5` is the final block.

The basics elements of each block are an `index.js` file that includes the registration of the block with its editing UI and saving routines, plus a companion stylesheet. The block UI is later moved to the `edit.js` for better readability once it starts to grow.

The final block includes an additional script to load in the font end to set the bar size and thus trigger a CSS animation.

