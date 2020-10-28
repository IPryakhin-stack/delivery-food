window.disableScroll = function () {

    const widthScroll = window.innerWidth - document.body.offsetWidth;

    document.body.dbScrollY = window.scrollY

    document.body.style.cssText = `
        position: fixed;
        top: ${-window.scrollY}px;
        left: 0;
        overflow: hidden;
        width: 100%;
        height: 100vh;
        padding-right: ${widthScroll}px;
    `;
}

window.enableScroll = function () {
    document.body.style.cssText = `position: relative;`;
    window.scroll({top: document.body.dbScrollY})
}