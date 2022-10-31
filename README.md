# Vincent Astolfi - CV / Resumé
This is a simple single-page APP that hosts my work experience and a contact form.

It's build in React, using Gatsby as a framework. I chose Gatsby because it's a great tool for making static sites, especially when the content doesn't change much. It has an easy to use Backend (cloud/serverless) Functions feature, which I utilized to handle contact form submissions & send myself email notifications. GatsbyJS also offers free hosting for a single project, so it's entirely free to host and maintain. 

The project is pure TypeScript and scores 100% on all Lighthouse tests (at the time of writing). You can see the site at [vincentastolfi.com](https://vincentastolfi.com)

I decided against using a CMS or Markdown parser to manage the content since it can be easier to update the content (if need be) via VSCode and just push my changes via `git`. If the site had more than one page I might consider it, but for now this works quite well for me.

## Star Field
On this project, I'm most proud of the Star Field effect in the Hero section at the top of the page. It's accomplished using very minimal Javascript and CSS `box-shadow`s. It generates 3 different sizes of stars, each of an amount I define. It then randomly chooses some stars to be brighter, by changing their color, at a psuedo-random rate I also define. The star field moves on an infinite, seamless loop, using a very simple CSS animation.

This was an adaptation of [Michael Becker's StarField effect](https://codepen.io/mindsculpt/pen/JJWEJE), and while his implementation was pure SCSS, I think my JS/CSS implementation improves on it substantially, in that:
- It doesn't require the user to use SCSS
- Uses much less CSS, as my box-shadows only include the color on the "bright" stars, the rest inherit from the parent div 
- It allows the star field effect to be more easily limited to the actual height/width of its container (mine will not generate stars outside of the width of the container, unlike the original implementation)
- Randomly chooses some stars to be brighter / different colors, which increases variability between the stars substantially
- Allows you to more easily control the number of each size of star / the percentage of those that will be "bright"

