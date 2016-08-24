# mutate.js
Method for mutating JSON object in JavaScript, inspired by the Logstash mutate filter
##Installation
Download a copy of this repository from GitHub to make the files available locally.
###Browser
Add a link to the [`./lib/mutate.js`][1] file in your web page, for example:
```html
<html>
  <head>
    <script src="./lib/mutate.js"></script>
  </head>
</html>
```
##Usage
Once installed, the mutate method is available on any JSON object. The generic syntax to mutate a JSON object is
```javascript
bar=foo.mutate(pattern)
```
`pattern` is a JSON object which gives a template for the output. The syntax options for the `pattern` object are given below.

If `pattern` is not specified, an identity transform is performed, meaning that `bar==foo`.
##Syntax
[1]: https://github.com/adamml/mutate.js/blob/master/lib/mutate.js
