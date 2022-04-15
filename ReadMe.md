# Welcome to Barrels R Us

This is a project I am building to experiment with theming in Umbraco. I will be attempting to accomplish the following:
- [x] Implement and use Sass in place of standard CSS.
- [x] Use Sass variables to dictate the color scheme used by the website.
- [x] Implement a toggle in the navigation of the site that, when switched, will turn on or off a color scheme that is user-friendly for those that are visually impaired.

## Notes about development environment:
- The site is being built with Umbraco v8.
- jQuery is being used in place of Vanilla JavaScript.
- Some Bootstrap will be implemented, but driving the theme switching will be Sass.
- Used [this Codepen](https://codepen.io/mburnette/pen/LxNxNg) as a foundation for the theme toggle switch.

## Sass commands to be run from any terminal:
For complete Sass documentation [click here](https://sass-lang.com/).
- `npm install -g sass` (installs Sass globally on your machine)
- While inside the project folder: 
	```
	sass --watch ThemedConferenceSite/SCSS/index.scss ThemedConferenceSite/CSS/index.css
	```
	- This command must be run any time you are making changes to the application's SCSS files.