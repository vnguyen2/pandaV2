'use strict'

var env         = require('minimist');
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var handlebars  = require('gulp-compile-handlebars');
var browserSync = require('browser-sync');
var nodemon     = require('gulp-nodemon');
var plumber     = require('gulp-plumber');
var browserify  = require('gulp-browserify');
var clean       = require('gulp-clean');
var rename      = require('gulp-rename');