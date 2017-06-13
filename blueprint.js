var p = require('preprocess');
var fs = require('fs');


var className = 'Test';
process.argv.forEach(function (val, index, array) {
  //console.log(index + ':' + val);
  if (index === 2) {
    className = val;
  }
});


var bpBase = './blueprint/';
var bpSharedExt = bpBase + 'SharedExt/';
var srcShared = './src/components/shared/';
var srcTheme = './src/components/theme/';
var srcBase = srcShared;


var data = {
  CLASSNAME: className,
  CLASSNAME_LOWERCASE: className.toLocaleLowerCase,
};

// if (theme) {
//   srcBase = srcTheme;
// }

var currentFile = '';

// Create Base Component file
currentFile = srcBase + data.CLASSNAME+'.js';
if (!fs.existsSync(currentFile)){ 
  p.preprocessFileSync(bpBase + 'Shared.js', currentFile, data, {type: 'js'});
} else {
  console.log('File already exists, skipping. ' + currentFile);
}

// Create Extensions folder
var srcSharedClassExt = srcBase + data.CLASSNAME+'Ext/';
if (!fs.existsSync(srcSharedClassExt)){ fs.mkdirSync(srcSharedClassExt); }

// Create Extension index
currentFile = srcSharedClassExt + 'index.js';
if (!fs.existsSync(currentFile)){ 
  p.preprocessFileSync(bpSharedExt + 'index.js', currentFile, data, {type: 'js'});
} else {
  console.log('File already exists, skipping. ' + currentFile);
}

// Create Extension base
currentFile = srcSharedClassExt + data.CLASSNAME+'Ext.js';
if (!fs.existsSync(currentFile)){ 
  p.preprocessFileSync(bpSharedExt + 'SharedExt.js', currentFile, data, {type: 'js'});
} else {
  console.log('File already exists, skipping. ' + currentFile);
}

// Create Extension iOS
currentFile = srcSharedClassExt + data.CLASSNAME+'Ext.ios.js';
if (!fs.existsSync(currentFile)){ 
  p.preprocessFileSync(bpSharedExt + 'SharedExt.ios.js', currentFile, data, {type: 'js'});
} else {
  console.log('File already exists, skipping. ' + currentFile);
}

// Create Extension Android
currentFile = srcSharedClassExt + data.CLASSNAME+'Ext.android.js';
if (!fs.existsSync(currentFile)){ 
  p.preprocessFileSync(bpSharedExt + 'SharedExt.android.js', currentFile, data, {type: 'js'});
} else {
  console.log('File already exists, skipping. ' + currentFile);
}
