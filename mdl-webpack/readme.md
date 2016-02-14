# MDL Webpack
A [Google Material Design Lite](http://www.getmdl.io/index.html) project built with NPM and Webpack.

<img src="mdl-webpack.png" style="width:100%; max-width: 800px; margin: 0 auto;" />

Material Design is a design language developed by Google. Expanding upon the "card" motifs 
that debuted in Google Now, Material Design makes more liberal use of grid-based layouts, responsive animations and 
transitions, padding, and depth effects such as lighting and shadows.

Material Design Lite lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript 
frameworks and aims to optimize for cross-device use,  and offer an experience that is immediately accessible


```
npm install
npm run dev
http://localhost:8080/webpack-dev-server/
```


## What is included

### Custom components

#### Accordion Component
<img src="flexbox-accordion.png"  style="height: 200px;" />

An accordion component is a collection of expandable panels associated with a common outer container. Panels consist of 
a header and an associated content region or panel. The primary use of an Accordion is to present multiple sections of 
content on a single page without scrolling, where all of the sections are peers in the application or object hierarchy. 
The general look is similar to a tree where each root tree node is an expandable accordion header. The user navigates 
and makes the contents of each panel visible (or not) by interacting with the Accordion Header.

#### Bordered Input Fileds Theme Component
<img src="bordered-fields-theme.png" />

Demonstrates how you can create your own theme of MDL text fields.

#### Select Element Component
<img src="select-element.png" />

The HTML ```<select>``` element represents a control that presents a menu of options. MDL does not provide it's own 
component for the ```<select>``` element.

### Polyfills

#### Details Element Polyfill
<img src="details-element.png" style="margin-left: -10px;" />

The ```<details>``` element specifies additional details that the user can view or hide on demand. The ```<summary>``` 
element defines a visible heading for the ```<details>``` element. The heading can be clicked to view/hide the details.
