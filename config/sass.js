 /********************************************************************************************
    * Transcompiles SASS/Compass into CSS:
    * Transcompiles .scss files into .css files. Generated files by 'dist' target get 
    * compressed/minified. Generated files by 'dev' target are human-readable. 
    *********************************************************************************************/
  module.exports.tasks = {
    sass: {
      dev: {
        options: {
          style: 'expanded',
          banner: '<%= tag.banner %>',
      	  compass: true
        },
        files: {
          '<%= project.css_gen %>/style.css': '<%= project.scss_file %>', '<%= project.css_gen %>/print.css': '<%= project.scss_print_file %>' 
        }
      },
      dist: {
        options: {
          style: 'compressed',
          compass: true
        },
        files: {
          '<%= project.css_gen %>/style.css': '<%= project.scss_file %>'
        }
      }
    }
  }