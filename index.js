const fs = require('fs'),
    path = require('path'),
    _ = require('lodash'),
    filePath = path.join(__dirname, 'template.html');

function chartsMaps(args, content) {
    const template = fs.readFileSync(filePath).toString();
    let options = {};
    if (content.length) {
        options = content;
    }
    return _.template(template)({
        id: 'chart' + ((Math.random() * 9999) | 0),
        option: options,
        height: args[0] || 400,
        width: args[1] || '80%'
    });
};

hexo.extend.tag.register('chart', chartsMaps, {
    async: true,
    ends: true
});