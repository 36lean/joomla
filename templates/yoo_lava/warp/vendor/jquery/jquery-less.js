(function(h){function p(c,g){function b(b){var c="";d.variables&&h.each(d.variables,function(a,b){c+=("@"===a.slice(0,1)?"":"@")+a+": "+(";"===b.slice(-1)?b:b+";")});c?(new less.Parser).parse(c,function(d,c){if(d)return e.reject(d);var g=b.rules;b.rules=b.rules.concat(c.rules);a(b);b.rules=g}):a(b)}function a(b){try{e.resolve(b.toCSS(d))}catch(a){e.reject(a)}}var e=h.Deferred(),d=g||{};(d.imports?m(c):h.Deferred().resolve(c)).done(function(a){d.id&&k[d.id]?b(k[d.id]):(new less.Parser).parse(a,function(a,
c){if(a)return e.reject(a);d.id&&(k[d.id]=c);b(c)})});return e.promise()}function m(c){function g(a,b){a=a.replace(/@import\s['"]?(.+?)['"]?\s*;/g,function(a,b){return-1!=a.indexOf("url(")?a:'@import url("'+b+'");'});return a.replace(f,function(a,d){return a.replace(d,j(d,b).url)})}var b=h.Deferred(),a={},e=j(window.location.href).host,d=/@import\s+url\s*\(['"]?(.+?)['"]?\)\s*;/g,f=/url\s*\(['"]?(.+?)['"]?\)/g;(function q(c){var f=[];c=c.replace(/@import\s['"]?(.+?)['"]?\s*;/g,function(a,b){return-1!=
a.indexOf("url(")?a:'@import url("'+b+'");'});c.replace(d,function(b,c){!a[c]&&e==j(c).host&&f.push(function(){return h.ajax({url:c,cache:!1}).done(function(b){a[c]=g(b.replace(/\/\*(?:[^*]|\*+[^\/*])*\*+\/|^((?!:).)?\/\/.*/g,""),c)}).fail(function(b,d,e){a[c]="/* Can't resolve import '"+c+"' ("+d+", "+e+") */"})});return b});var k=[],l=null;h.each(f,function(a,b){k.push(l=l?l.then(b):b.call())});h.when.apply(h,k).always(function(){c=c.replace(d,function(b,c){return a[c]?a[c]:b});f.length?c=q(c):
b.resolve(c)});return c})(g(c.replace(/\/\*(?:[^*]|\*+[^\/*])*\*+\/|^((?!:).)?\/\/.*/g,"")));return b.promise()}function r(c){var g={},b=c.split("\n");c=0;for(max=b.length;c<max;c++){var a=h.trim(b[c]);a.length&&/@[\w\-]+\s*:.[^;]*;/.test(a)&&(a=h.trim(a.replace(";","").replace(/\s+/,"")).split(":"),a[1]=h.trim(a[1].replace(";","").split("//")[0]),g[a[0]]=a[1])}return g}function s(c,g){return c.replace(/url\s*\(['"]?(.+?)['"]?\)/g,function(b,a){return b.replace(a,n(j(a,g).url,g))})}function n(c,g){var b=
j(c),a,e=j(g),d="",f;if(b.host!==e.host)return"";a=Math.max(e.dirs.length,b.dirs.length);for(f=0;f<a&&e.dirs[f]===b.dirs[f];f++);a=b.dirs.slice(f);e=e.dirs.slice(f);for(f=0;f<e.length-1;f++)d+="../";for(f=0;f<a.length-1;f++)d+=a[f]+"/";return d+b.file+b.query}function j(c,g){var b=/^((?:[a-z-]+:)?\/\/(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/,a=c.match(b),e={},d=[];if(!a)throw new Exception("Could not parse url - '"+c+"'");if(!a[1]||a[2]){g||(g=window.location.href);
b=g.match(b);if(!b)throw new Exception("Could not parse url - '"+g+"'");a[1]=b[1];a[2]||(a[3]=b[3]+a[3])}if(a[3]){d=a[3].replace("\\","/").split("/");for(b=0;b<d.length;b++)".."===d[b]&&0<b&&(d.splice(b-1,2),b-=2)}e.host=a[1];e.path=a[1]+d.join("/");e.file=a[4]||"";e.query=a[5]||"";e.url=e.path+e.file+e.query;e.dirs=d;return e}var k={};h.less=h.less||{getCSS:p,getVars:r,resolveImports:m,rewriteUrls:s,pathDiff:n,extractUrlParts:j}})(jQuery);