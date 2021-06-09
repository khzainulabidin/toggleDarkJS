# ToggleDarkJS

A simple, light-weight, zero dependency, JavaScript package to enable dark mode functionality on your website.

<br/><br/>
## Installation

Using **npm**

`$ npm i --save toggledarkjs`

Using **yarn**

`$ yarn add toggledarkjs`

<br/><br/>
## Usage

First things first. Add toggleDarkJS to your project.

Using **ES6**

`import toggleDarkJS from "toggledarkjs";`

Using **CommonJS**

`const toggleDarkJS = require('toggledarkjs');`

Now create an array with CSS variables you want to update with theme:

    const styles = [
        {name: '--primary-color', light: 'white', dark: 'black'}, 
        {name: '--secondary-color', light: 'black', dark: 'white'},
    ];

Now setup your darkMode boolean variable:

`const isDarkMode = false;`

Finally, call the toggleDarkJS and let it handle the rest:

`toggleDarkJS(isDarkMode, styles);`

Now `--primary-color` and `--secondary-color` are available project-wide and you can use them in any of your CSS file, without importing anything, like this:

    .app{
        background: var(--primary-color);
        color: var(--secondary-color);
    }

<br/><br/>
## Code Snippet

Here's a working code sample in React JS:

**App.js**

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        toggleDarkJS(isDarkMode, [
            {name: '--primary-color', light: 'white', dark: 'black'},
            {name: '--secondary-color', light: 'black', dark: 'white'},
        ]);
    }, [isDarkMode]);

    return (
        <div className={'app'}>
            <h1 className={'title'}>hello world, this is toggleDarkJS</h1>
            <button className={'actionButton'} onClick={() => setIsDarkMode(!isDarkMode)}>Toggle theme</button>
        </div>
    );

**App.css**

    .app{
        background: var(--primary-color);
    }
    
    .title{
        color: var(--secondary-color);
    }
    
    .actionButton{
        background: transparent;
        color: var(--secondary-color);
        border: 1px solid var(--secondary-color);
    }

<br/><br/>
## Style object

    [
        {
            name: '--name-of-css-variable', 
            light: 'style to display in light mode'
            dark: 'style to display in dark mode'
        },
    ]

For example:

    [
        {
            name: '--primary-color', 
            light: '#000000'
            dark: '#FFFFFF'
        },
    ]

<br/><br/>
## Parameters

| Parameter  | Type          | Required | Default |
|------------|---------------|----------|---------|
| isDarkMode | Boolean       | Yes      | false   |
| styles     | Array[Object] | Yes      | []      |
