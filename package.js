Package.describe({
  name: 'vienpn:wow-animation',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Scroll animation',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('ecmascript');
  api.addFiles('css/animate.css','client');
  api.addFiles('js/woow.min.js','client');
});
