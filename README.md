# Facebook multitone icons

The standard FB reaction icons, recreated in CSS with only one element 
necessary per icon.

* Utilises web fonts to allow for crisp icons, regardless of size
* Any styling which can be used on text can be used here (e.g. changing 
colours, font size, etc)
* Multi-colour (as per the original FB icons)
* Won't 'leak' colour dependent on background (i.e. white 'thumbs up' 
icon will always be white, unlike single-layer icons such as FontAwesome's 
[`fa-check-circle`](http://fontawesome.io/icon/check-circle/) *)

> \* No disrespect meant to FontAwesome; I'm a proud backer of v5 and 
eternally thankful to [Dave Gandy](https://twitter.com/davegandy) for 
popularising the notion of SVG icons :)

## Quick start

View `dist\index.html` to preview the icons.

## Background

[Hopefully the comments in the code will clear most questions up, but
eventually when I get the opportunity I'll write up the motivations,
problems, fixes etc. here.
\#LateNightAgainBlog]

## Browser support

* Chrome (supported)
* Firefox (supported)
* Safari (supported on iOS; **untested on Mac**)
* Edge **(untested)**
* Internet Explorer **(untested)**
* Opera **(untested)**

If you need legacy browser support (e.g. IE 8+) you
can try enabling the option in [IcoMoon](https://icomoon.io), but there 
are no guarantees this will behave itself without further tweaks to the 
CSS.

## To-do

Obviously there's still work to do in order to get this fully cross-browser, 
and I hope to update this project as time permits. Anyone wishing to pull, 
fork and / or contribute is more than welcome to do so:

* IE10 / Edge support (possibly IE8/9 if I'm bribed heavily)
* Refactor so separate `content` font is no longer necessary
* Consider introducing animation options (e.g. scale / transform tear)
* Tidy up `package.json` / `gulpfile.js` 

## Credits

* [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate) - base
project
* [IcoMoon](https://icomoon.io) - SVG conversion to web fonts
* [Facebook brand resource center](https://en.facebookbrand.com/assets/reactions)
- original Facebook reaction images
* [Font Face Observer](https://github.com/bramstein/fontfaceobserver) -
used to workaround FONG**

> \** **F**lash **O**f **N**aked **G**radient :)

## License

Code released under the MIT license.

> TL;DR - you're free to do what you want with it, as long as I'm not held liable :)
