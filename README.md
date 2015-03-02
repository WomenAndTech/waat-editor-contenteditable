# Waat-Editor

Description goes here.

## Setup

### Initialization



````:js
# initialize new editor instance
var editor = new WaatEditor(); 
````

You can also pass in two optional parameters:
1. Element (A single dom element object, an array of dom element objects, or a string with comma separated #IDs or .Classes)
2. Options (JSON Object) see [Options](#options)

````:js
# e.g. Create new WaatEditor for specific element with id of #someElementID
var editor = "#someElementID";
var options = {...};
var editor = new WaatEditor(element, options);
````

## Options

#### Write out options

## Editor Menu (currenly 'menu')

````
waat-editor/menu.js
````

This is the WYSIWGY editor menu i.e. text editor tools (Bold, Italic etc.).

## Context Menu (currently 'sidemenu')

````
waat-editor/sidemenu.js
````

This is the side context menu that can mutate the current element e.g. change a ````<p>```` to an ````<aside>````.

## Serializer

````:js
waat-editor/serializer.js
````

Serialize Dom Element into a JSON object.

# TODOs

- Add Grunt Task runner for compiling JS, SCSS and others
- Create compass config file for sass in ````src/sass/````