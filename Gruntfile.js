module.exports = function (grunt) {
  pkg: grunt.file.readJSON("package.json");
  grunt.initConfig({
    // For sass or css
    sass: {
      dist: {
        options: {
          style: "expanded",
        },
        files: {
          // this is for sass to css
          "style.css": "sassy/superSec/style.scss", // 'destination': 'source'
        },
      },
    },
    cssmin: {
      target: {
        files: {
          // this is css file minfication
          "style.min.css": "style.css",
        },
      },
    },
    // For Js
    concat: {
      js: {
        // This line will select all js file from public/js/
        src: ["javascript/*.js"],
        // This line define path to Create one Js File
        dest: "main.js",
      },
    },
    uglify: {
      t1: {
        files: {
          // This is for js file minfication
          "main.min.js": "main.js",
        },
      },
    },
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: ["index.html"],
      },
      js: {
        files: ["javasrcipt/*.js"],
        tasks: ["concat", "uglify"],
      },
      css: {
        files: ["sassy/*/*.scss"],
        tasks: ["sass", "cssmin"],
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("default", [
    "concat",
    "sass",
    "uglify",
    "cssmin",
    "watch",
  ]);
};
