# Vincent Astolfi - CV / Resume
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

### Here's how it works:

(Without comments / extra spacing, this is <35 lines of TypeScript)

```typescript
// Type Definitions
type StarFieldSettingsSizeProps = {
    stars: number,
    brightPercentage: number
}

type StarFieldSettingsSizeKeysProps = {
    [key : string]: StarFieldSettingsSizeProps;
};

// We instantiate a new component called StarField
const StarField = (props: {height: number}) => {
    // Pass height from parent component; my height will be 450px, which we'll need to consider when writing the CSS
    const {containerHeight} = props;
    // We're going to track the window width so we know how far out we can generate stars; you could easily use
    // the width of the parent component as well, but in my case my component width will always be the window width
    const [windowWidth, setWindowWidth] = useState<number>(0);

    // These are the sizes of the stars and the percentage chance that any one of them will be bright per-group
    const STAR_FIELD_SETTINGS : StarFieldSettingsSizeKeysProps = {
        'small': { stars: 150, brightPercentage: 25 },
        'medium': { stars: 100, brightPercentage: 15 },
        'large': { stars: 50, brightPercentage: 2 }
    }

    // Used so we can track the windowWidth & determine what the max X coordinate should be for our box shadows; if you're using
    // the parent component width and passing it to this component, then you don't need this
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        // Run once on page load
        handleResize();
        // Adding event listener
        window.addEventListener('resize', handleResize);
        // Removing event listener un unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    // Here, we set boxShadows on each size of star. The clone inherits
    // The box shadows and offsets its top value to the containerHeight in the styles.css to make the animation seamless
    // windowWidth is always initialized as 0, so if it's greater, we know it's been set properly by the useEffect & therefore
    // we can render the StarField
    return (
        <>
            {(windowWidth > 0) &&
                <div className="star-field">
                    {Object.keys(STAR_FIELD_SETTINGS).map((size : string) => {
                        return <div
                            className={'star-field__'+size}
                            style={{boxShadow : generateStarsBoxShadowsString(
                                containerHeight,
                                windowWidth,
                                STAR_FIELD_SETTINGS[size]?.stars,
                                STAR_FIELD_SETTINGS[size]?.brightPercentage)
                            }}
                        >
                            <div className="star-field__clone"></div>
                        </div>
                    })}
                </div>
            }
        </>
    )
}
```

### Here's how we generate the stars:

(without comments + extra spacing, this is <20 lines of TypeScript)

```typescript
const generateStarsBoxShadowsString = (
        containerHeight: number,
        windowWidth: number,
        stars: number,
        brightPercentage: number
    ) : string => {
    // instantiate an empty string, which we will append to when adding the box shadows (stars)
    let boxShadowString = '';
    // Generate Stars using Box Shadows between windowWidth and containerHeight
    for (let i = 0; i < stars; i++) {
        boxShadowString += getSingleBoxShadowString(
            // Random X value, cannot be greater than windowWidth
            randomMaxIntInclusive(windowWidth),
            // Random Y value, cannot be greater than containerHeight
            randomMaxIntInclusive(containerHeight),
            // Random boolean based on brightPercentage (helps introduce vairability in brightness between stars of a size)
            // This works by generating a random # between 0 - 100, and checking if brightPercentage is greater; in this way
            // we can randomly (in a psuedo-random way) assign certain stars to be "brighter" at a rate we define 
            (randomMaxIntInclusive(100) < brightPercentage ? true : false)
        );
    }
    // Remove the last comma & return; this is probably better than checking if stars - 1 = i every time we want to add a comma
    return boxShadowString.slice(0, -1);
}

// Used for generating random Integers between 0 & a max value (inclusive)
const randomMaxIntInclusive = (max: number) : number => {
    return Math.floor(Math.random() * max);
}

// Introduces even more variability by giving bright stars random different colors (from a pre-defined list)
// White, Yellow, Orange
const getRandomBrightColor = () : String => {
    // You could set whatever colors you want here, or generate them randomly
    const brightColors : Array<String> = ["#eee", "#fff5c0", "#ffc4a6"]
    return brightColors[randomMaxIntInclusive(brightColors.length - 1)];
}

// x = x coord of box shadow, y = y coord, makeBright = whether or not we should make this start "bright" by setting its
// color to white; because we randomly set makeBright to true based on a percentage chance, this introduces more variability
// in the stars
// returns something like "508px 341px," or "437px 871px #eee," depending on if makeBright is true or not
const getSingleBoxShadowString = (x: number, y: number, makeBright: boolean) : string => {
    return x + 'px ' + y + 'px' + (makeBright ? ' ' + getRandomBrightColor() + ',' : ',');
}
```

### Here's the CSS
(Without spacing and comments, this is about 50 lines of CSS; fadeInAnimation optional). Note that the container of `.star-field` must be `position: absolute;` or `position: relative`.
```css
.star-field {
    animation: fadeInAnimation 3s;
}

.star-field__small,
.star-field__medium,
.star-field__large {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: #a7cfff;
    filter: blur(1px);
    opacity: .75;
    animation-name: starFieldAnimation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

/*
Smaller stars would presumably move more slowly, because they are further away, so we make the animation-duration longer
*/
.star-field__small {
    width: 1px;
    height: 1px;
    animation-duration: 180s;
}

.star-field__medium {
    width: 2px;
    height: 2px;
    animation-duration: 135s;
}

.star-field__large {
    width: 3px;
    height: 3px;
    animation-duration: 90s;
}

/*
By inheriting the box shadows, we don't need to repeat the CSS for the box shadows twice per star-field__size
We translate this "clone" up 450px, the height of the container, so that when the animation starts over, the
Transition is seamless. We can't use psuedoelements here because we're inlining the box-shadows css
*/
.star-field__clone {
    box-shadow: inherit;
    position: relative;
    top: 450px;
    height: 100%;
}

@keyframes fadeInAnimation {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes starFieldAnimation {
    0% {
        transform: translateY(-450px);
    }
    100% {
        transform: translateY(0);
    }
}
```
