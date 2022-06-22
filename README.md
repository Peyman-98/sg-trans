# Selected Translations

## Contents

- [Usage](#usage)
- [Description](#description)
- [API](#api)
  - [tmpl() function](#tmpl-function)
  - [Templates cache](#templates-cache)
  - [Output encoding](#output-encoding)
- [License](#license)

## Usage

### Client-side

Install the **blueimp-tmpl** package with [NPM](https://www.npmjs.org/):

```sh
npm install blueimp-tmpl
```

Include the (minified) JavaScript Templates script in your HTML markup:

```html
<script src="js/tmpl.min.js"></script>
```

Add a script section with type **"text/x-tmpl"**, a unique **id** property and
your template definition as content:

```html
<script type="text/x-tmpl" id="tmpl-demo">
  <h3>{%=o.title%}</h3>
  <p>Released under the
  <a href="{%=o.license.url%}">{%=o.license.name%}</a>.</p>
  <h4>Features</h4>
  <ul>
  {% for (var i=0; i<o.features.length; i++) { %}
      <li>{%=o.features[i]%}</li>
  {% } %}
  </ul>
</script>
```

**"o"** (the lowercase letter) is a reference to the data parameter of the
template function (see the API section on how to modify this identifier).

In your application code, create a JavaScript object to use as data for the
template:

```js
var data = {
  title: 'JavaScript Templates',
  license: {
    name: 'MIT license',
    url: 'https://opensource.org/licenses/MIT'
  },
  features: ['lightweight & fast', 'powerful', 'zero dependencies']
};
```

In a real application, this data could be the result of retrieving a
[JSON](https://json.org/) resource.

Render the result by calling the **tmpl()** method with the id of the template
and the data object as arguments:

```js
document.getElementById('result').innerHTML = tmpl('tmpl-demo', data);
```

## Description

1KB lightweight, fast & powerful JavaScript templating engine with zero
dependencies.

## API

### tmpl() function

The **tmpl()** function is added to the global **window** object and can be
called as global function:

```js
var result = tmpl('tmpl-demo', data);
```

The **tmpl()** function can be called with the id of a template, or with a
template string:

```js
var result = tmpl('<h3>{%=o.title%}</h3>', data);
```

If called without second argument, **tmpl()** returns a reusable template
function:

```js
var func = tmpl('<h3>{%=o.title%}</h3>');
document.getElementById('result').innerHTML = func(data);
```

### Templates cache

Templates loaded by id are cached in the map **tmpl.cache**:

```js
var func = tmpl('tmpl-demo'), // Loads and parses the template
  cached = typeof tmpl.cache['tmpl-demo'] === 'function', // true
  result = tmpl('tmpl-demo', data); // Uses cached template function

tmpl.cache['tmpl-demo'] = null;
result = tmpl('tmpl-demo', data); // Loads and parses the template again
```

### Output encoding

The method **tmpl.encode** is used to escape HTML special characters in the
template output:

```js
var output = tmpl.encode('<>&"\'\x00'); // Renders "&lt;&gt;&amp;&quot;&#39;"
```

**tmpl.encode** makes use of the regular expression **tmpl.encReg** and the
encoding map **tmpl.encMap** to match and replace special characters, which can
be modified to change the behavior of the output encoding.  
Strings matched by the regular expression, but not found in the encoding map are
removed from the output. This allows for example to automatically trim input
values (removing whitespace from the start and end of the string):

```js
tmpl.encReg = /(^\s+)|(\s+$)|[<>&"'\x00]/g;
var output = tmpl.encode('    Banana!    '); // Renders "Banana" (without whitespace)
```

## License

[MIT license](https://opensource.org/licenses/MIT).
