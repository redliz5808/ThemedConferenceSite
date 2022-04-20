# Welcome to Barrels R Us

This is a project I am building to experiment with theming in Umbraco. I will be attempting to accomplish the following:
- [x] Implement and use Sass in place of standard CSS.
- [x] Use Sass variables to dictate the color scheme used by the website.
- [x] Implement a toggle in the navigation of the site that, when switched, will turn on or off a color scheme that is user-friendly for those that are visually impaired.
- [ ] Gain more backend knowledge to implement the features correctly.

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

# Web Accessibility Rules to Keep in Mind:
1. Declare language.
	```
	<html lang="en">
	```
2. Contrast ratio between colors must be at least 4.5:1 for text <= 14pt and 3:1 for text >= 14pt bold.
3. All images must have alt attributes.
4. Link text should explain where the link will take the user (or be surrounded by text that does this).
5. Nothing should flash more once every 3 seconds and/or you should provide a way to stop flashing completely.
6. Verify tab order is correct for site navigation by keyboard.
7. Text should be scalable.
8. All form inputs must have labels (visually hidden or otherwise).