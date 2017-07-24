    module.exports = function(grunt) {

        // 1. All configuration goes here 
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            concat: {
                dist: {
                    src: [
                        'js/vendor/*.js', // All JS in the libs folder
                        'js/plugins.js', // This specific file
                        'js/main.js' // This specific file
                    ],
                    dest: 'js/build/production.js',
                }
            },
            uglify: {
                build: {
                    src: 'js/build/production.js',
                    dest: 'js/build/production.min.js'
                }
            },
            imagemin: {
                dynamic: {
                    files: [{
                        expand: true,
                        cwd: 'img/',
                        src: [
                            '*.{png,jpg,gif}'
                        ],
                        dest: 'img/build/'
                    }]
                }
            },
            sass: {
                dist: {
                    options: {
                        style: 'nested',
                        lineNumbers: true,
                    },
                    files: {
                        'css/stylesheets/main.css': 'css/sass/main.scss'
                    }
                }
            },
            autoprefixer: {
                options: {
                    browsers: ['last 3 versions', 'ie 8', 'ie 9', '> 1%']
                },
                main: {
                    expand: true,
                    flatten: true,
                    src: 'css/stylesheets/main.css',
                    dest: 'css/stylesheets/build/'
                }
            },
            cssmin: {
                target: {
                    files: [{
                        expand: true,
                        cwd: 'css/stylesheets/build',
                        src: ['*.css'],
                        dest: 'css/production/build',
                        ext: '.min.css'
                    }]
                }
            },

            watch: {
                options: {
                    livereload: true,
                },
                scripts: {
                    files: ['js/vendor/*.js', 'js/main.js'],
                    tasks: ['concat', 'uglify'],
                    options: {
                        spawn: false,
                    },
                },
                css: {
                    files: ['css/sass/*/*.scss', 'css/sass/*/*/*.scss'],
                    tasks: ['sass', 'autoprefixer', 'cssmin'],
                    options: {
                        spawn: false,
                    }
                }

            },


        });

        // 3. Where we tell Grunt we plan to use this plug-in.
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-imagemin');
        grunt.loadNpmTasks('grunt-contrib-sass');
        grunt.loadNpmTasks('grunt-autoprefixer');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-watch');

        // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
        grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'autoprefixer', 'cssmin', 'watch']);

    };
