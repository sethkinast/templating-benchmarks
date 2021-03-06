var marko = require('marko');

module.exports = {
    name: 'marko',
    ext: 'marko',
    render: function(template, data, callback) {
        template.render(data, callback);
    },
    load: function(src, templatePath, templateName, callback) {
        var template = marko.load(templatePath);
        callback(null, template);
    },
    compile: function(src, templatePath, templateName, callback) {
        var compiled = require('marko/compiler').compile(src, templatePath);
        callback(null, compiled);
    }
};
