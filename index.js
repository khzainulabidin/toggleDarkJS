/*
* Helper function to set CSS variables in the document's root element
* Checks if a valid CSS variable name is provided or not
* */
const applyRootStyle = (name='', style='') => {
    // Validations
    if (name.length < 3){
        return console.error(`toggleDarkJS: Please provide a valid CSS variable name. For example:\n
            --primary-color, --secondary-color`);
    }
    if (name.charAt(1) !== '-'){
        return console.error(`toggleDarkJS: Please change ${name} to ${name.charAt(0) !== '-' ? '-' : ''}-${name}`);
    }
    if (!name.charAt(2).match(/^[a-zA-Z]*$/)){
        return console.error(`toggleDarkJS: Please change ${name} to a valid CSS variable name. For example:\n
            --primary-color, --secondary-color`)
    }

    // Actual
    return document.documentElement.style.setProperty(name.toLowerCase(), style.toLowerCase());
}

/*
* Function to toggle between light and dark mode
* Checks if a valid styles array is provided or not
* Sets either dark styles or light styles based on isDarkMode boolean
* */
const toggleDarkJS = (isDarkMode=false, styles=[]) => {
    // Validations
    if (!styles || !Array.isArray(styles) || styles.length < 1){
        return console.error("toggleDarkJS: Please provide a valid style variables array. For example:\n" +
            "[{name: '--primary-color', light: '#000000', dark: '#FFFFFF'}]");
    }

    // Actual
    if (isDarkMode){
        return styles.map(({name, dark}) => applyRootStyle(name, dark));
    }
    return styles.map(({name, light}) => applyRootStyle(name, light));
}

module.exports = toggleDarkJS;
