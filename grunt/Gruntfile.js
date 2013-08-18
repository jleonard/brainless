module.exports = function(grunt) {

  var CONFIG = {
    tearsheet : {
      url : "http://localhost:8888/leonard/yeoman-tests/y10/dist/docs/components.html",
      file: "../../dist/docs/download/tearsheet.png",
      width: "1200",
      height: "4000"
    }
  }

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*
    * Display the filesize of optimized assets.
    */
    bytesize: {
      all: {
        src: [
          '../dist/js/app.js',
          '../dist/js/app.min.js',
          '../dist/css/app.css'
        ]
      }
    },

    /*
    * Erase files and folders. During the build process
    * directories are generated and require clean up.
    */
    clean: {
      options: {
        force: true
      },
      pre: {
        src: ['../dist']
      },
      post: {
        src: ['../docs/out','../docs/snippets','../app']
      }
    },

    copy: {
      build: {
        files: [
          {expand: true, cwd: '../src/', src: ['*.md'], dest: '../dist/'},
          {expand: true, cwd: '../src/', src: ['*.ico'], dest: '../dist/'},
          {expand: true, cwd: '../src/font/', src: ['**'], dest: '../dist/font/'},
          {expand: true, cwd: '../src/img/', src: ['**'], dest: '../dist/img/'},
          {expand: true, cwd: '../libs/font-awesome/font/', src: ['**'], dest: '../dist/font/'},
          {expand: true, cwd: '../libs/modernizr/', src: ['modernizr.js'], dest: '../dist/js/'},
          {expand: true, cwd: '../libs/bootstrap/fonts', src: ['**'], dest: '../dist/font/'}
        ]
      },
      docs: {
        files: [
          {expand: true, cwd: '../grunt/', src: ['package.json'], dest: '../docs/src/files/data/grunt/'},
          {expand: true, cwd: '../', src: ['bower.json'], dest: '../docs/src/files/data/bower/'}
        ]
      },
      post: {
        files: [
          {expand: true, cwd: '../docs/out/', src: ['**'], dest: '../dist/docs/'},
          {expand: true, cwd: '../docs/snippets/', src: ['**'], dest: '../dist/tools/sublime-snippets/'},
          {expand: true, cwd: '../dist/', src: ['**'], dest: '../app/'},
          {expand: true, cwd: '../dist/css', src: ['**'], dest: '../dist/docs/css'},
          {expand: true, cwd: '../dist/img', src: ['**'], dest: '../dist/docs/img'},
          {expand: true, cwd: '../dist/font', src: ['**'], dest: '../dist/docs/font'},
          {expand: true, cwd: '../dist/js', src: ['**'], dest: '../dist/docs/js'},
          {expand: true, cwd: '../tools/casperjs', src: ['*.png'], dest: '../dist/docs/download'}
        ]
      }
    },

    /*
    * Concatenate .js
    */
    concat: { 
      options: {
        separator: ';'
      },
      build: {
        src: [
          '../libs/jquery/jquery.js',
          '../libs/Radio/radio.min.js',
          '../libs/respond/respond.src.js',
          '../libs/json2/json2.js',
          '../libs/handlebars.js/dist/handlebars.js',
          '../libs/handlebars.js/dist/handlebars.runtime.js',
          '../libs/bootstrap/js/transition.js',
          '../libs/bootstrap/js/alert.js',
          '../libs/bootstrap/js/button.js',
          '../libs/bootstrap/js/carousel.js',
          '../libs/bootstrap/js/collapse.js',
          '../libs/bootstrap/js/dropdown.js',
          '../libs/bootstrap/js/modal.js',
          '../libs/bootstrap/js/tooltip.js',
          '../libs/bootstrap/js/popover.js',
          '../libs/bootstrap/js/scrollspy.js',
          '../libs/bootstrap/js/tab.js',
          '../libs/bootstrap/js/typeahead.js',
          '../libs/bootstrap/js/affix.js',
          '../libs/lorem/lorem.js',
          '../libs/detectizr/detectizr.js',
          '../libs/holderjs/holder.js',
          '../src/js/app.js',
          '../src/js/dev.js'
        ],
        dest: '../dist/js/app.js',
        nonull: true
      },
      release: {
        src: [
          '../libs/jquery/jquery.js',
          '../libs/respond/respond.src.js',
          '../libs/bootstrap/js/transition.js',
          '../libs/bootstrap/js/alert.js',
          '../libs/bootstrap/js/button.js',
          '../libs/bootstrap/js/carousel.js',
          '../libs/bootstrap/js/collapse.js',
          '../libs/bootstrap/js/dropdown.js',
          '../libs/bootstrap/js/modal.js',
          '../libs/bootstrap/js/tooltip.js',
          '../libs/bootstrap/js/popover.js',
          '../libs/bootstrap/js/scrollspy.js',
          '../libs/bootstrap/js/tab.js',
          '../libs/bootstrap/js/typeahead.js',
          '../libs/bootstrap/js/affix.js',
          '../src/js/app.js',
          '../src/js/dev.js'
        ],
        dest: '../dist/js/app.js',
        nonull: true
      }
    },

    /*
    * Generates DocPad project
    */
    docs: {
      srcPath: '../docs/src/',
      outPath: '../docs/out/',
      pluginsPaths: [ 
        '../docs/node_modules'
      ]
    },

    /*
    * Removes console.log statements from .js
    */
    groundskeeper: {
      release: {
        files: {
          '../dist/js/app.js': '../dist/js/app.js' // 1:1 compile
        },
        options: {  // this options only affect the compile task
          console: false
        }
      }
    },
    
    /*
    * Javascript linting
    * http://www.jshint.com/docs/options/
    */
    jshint: {
      files: ['../src/js/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        forin: true,
        indent: 2,
        undef: true,
        newcap: true,
        quotmark: 'single',
        maxparams: 3,
        camelcase: true,
        // options here to override JSHint defaults and whitelist some globals.
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    less: {
      build: {
        options: {
          yuicompress: true
        },
        files: {
          "../css/gh_pages.css": "../less/gh_pages.less"
        }
      }
    },

    shell: {
      docs: {
        command: 'cd ../docs; docpad generate',
        options: {
          stdout: true
        }
      },
      tearsheet: {
        command: "cd ../tools/casperjs/; casperjs screencap.js --url="+CONFIG.tearsheet.url+"?ui --file="+CONFIG.tearsheet.file+" --width="+CONFIG.tearsheet.width+" --height="+CONFIG.tearsheet.height,
        options: {
          stdout: true
        }
      },
      symlink: {
        command: 'cd ../dist/tools/sublime-snippets; PUJOL=$(pwd); echo $PUJOL; cp -R -f $(pwd) ~/"Library/Application\ Support/Sublime\ Text\ 2/Packages/"; cd-',
        options: {
          stdout: true
        }
      }
    },

    /*
    * Minify the .js created by the concat task
    * and save it to the dist
    */
    uglify: { // !
      options: {
        mangle: false
      },
      build: {
        files: {
          '../dist/js/app.min.js': ['../dist/js/app.js']
        }
      }
    },
    
    watch: { // !
      files: ['../less/**','../*.html',"../docs/src/documents/**","../docs/src/layout/**","../docs/src/partials/**"],
      tasks: ['default'],
      options: {
        livereload: false
      }
    },

    zip: { // !
      build: {
        dot: false,
        dest: "../dist/docs/download/app.zip",
        src: ['../app/**',"!../app/docs/**"]
      }
    },

    /*
    * Converts a less file with key: value pairs into a docpad partial.
    * Note: This will not resolve less's color methods ex. darken(), lighten()
    */
    'styleguide-color': {
      files: ["../src/less/vars/_color.less"],
      options: {
        dest: "../docs/src/partials/color-list.html"
      }
    },

    /*
    * Converts a less file with key: value pairs into an html table in the docs.
    */
    'styleguide-keyval': {
      files: ["../src/less/vars/_breakpoints.less"],
      options: {
        dest: "../docs/src/partials/breakpoints-table.html"
      }
    }
    
  });
  
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-docs');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-zip');
  grunt.loadNpmTasks('grunt-regex-replace');
  grunt.loadNpmTasks('grunt-groundskeeper');
  grunt.loadNpmTasks('grunt-bytesize');
  grunt.loadNpmTasks('grunt-docpad-styleguide-color');
  grunt.loadNpmTasks('grunt-docpad-styleguide-keyval');

  grunt.registerTask(
    'default', 
    [
      'less'
    ]);


};