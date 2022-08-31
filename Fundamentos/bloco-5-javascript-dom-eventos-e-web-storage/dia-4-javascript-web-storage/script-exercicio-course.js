// const body = document.getElementById('body');
// const bGroundColor = body.style.backgroundColor;
// const textColor = body.style.color;
// const fontSize = body.style.fontSize;
// const lineHeigth = body.style.lineHeight;
// const fontFamily = body.style.fontFamily;

window.onload = function() {
    const bookConteiner = document.querySelector('#book-conteiner');
    function setbackGroundColor(color) {
        bookConteiner.style.backgroundColor = color;
        localStorage.setItem('backgroundColor', color);
    }

    let backGroundColorButtons = document.querySelectorAll('#bgc > button');
    for (let index = 0; index < backGroundColorButtons.length; index += 1) {
        backGroundColorButtons[index].addEventListener('click', function(event) {
            setbackGroundColor(event.target.innerHTML);
        });
    }

    function setColor(textColor) {
        bookConteiner.style.color = textColor;
        localStorage.setItem('color', textColor)
    }

    let textColorButtons = document.querySelectorAll('#tcolor > button');
    for (let index = 0; index < textColorButtons.length; index += 1) {
        textColorButtons[index].addEventListener('click', function(event) {
            setColor(event.target.innerHTML);
        });
    }

    function setFontSize(size) {
        bookConteiner.style.fontSize = size;
        localStorage.setItem('fontSizer', size);
    }

    let fontSizerButtons = document.querySelectorAll('#size-font > button');
    for (let index = 0; index < fontSizerButtons.length; index +=1) {
        fontSizerButtons[index].addEventListener('click', function(event) {
            setFontSize(event.target.innerHTML);
        });
    }

    function setLineHeight(height) {
        bookConteiner.style.lineHeight = height;
        localStorage.setItem('lineHeight', height);
    }

    let lineHeightButtons = document.querySelectorAll('#line-height > button');
    for (let index = 0; index < lineHeightButtons.length; index += 1) {
        lineHeightButtons[index].addEventListener('click', function(event) {
            setLineHeight(event.target.innerHTML);
        });
    }

    function setFontFamily(font) {
        bookConteiner.style.fontFamily = font;
        localStorage.setItem('fontFamily', font);
    }

    let fontFamilyButtons = document.querySelectorAll('#font > button');
    for (let index = 0; index < fontFamilyButtons.length; index += 1) {
        fontFamilyButtons[index].addEventListener('click', function(event) {
            setFontFamily(event.target.innerHTML);
        });
    }

    function initialize() {
        let backgroundColor = localStorage.getItem('backgroundColor');
        if (backgroundColor) setbackGroundColor(backgroundColor);

        let textColor = localStorage.getItem('color');
        if (textColor) setColor(textColor);

        let fontSize = localStorage.getItem('fontSizer');
        if (fontSize) setFontSize(fontSize);

        let lineHeight = localStorage.getItem('lineHeight');
        if (lineHeight) setLineHeight(height);

        let fontFamily = localStorage.getItem('fontFamily');
        if (fontFamily) setFontFamily(font);
    }
    initialize();
}
