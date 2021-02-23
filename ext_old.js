function getControlByClassName(className)
{
    let controls = document.getElementsByClassName(className);
    return controls.length === 1 ? controls[0] : undefined;
}

function getControls()
{
    let playButton = getControlByClassName('vidis_controls_play');
    if (playButton === undefined) { return undefined; }

    let fullscreenButton = getControlByClassName('vidis_controls_full_screen');
    if (fullscreenButton === undefined) { return undefined; }

    let speedPlusButton = getControlByClassName('vidis_controls_settings_speed_plus');
    if (speedPlusButton === undefined) { return undefined; }

    let speedMinusButton = getControlByClassName('vidis_controls_settings_speed_minus');
    if (speedMinusButton === undefined) { return undefined; }

    let controlBar = getControlByClassName('vidis_controls');
    if (controlBar === undefined) { return undefined; }

    return {
        play: playButton,
        fullscreen: fullscreenButton,
        speedPlus: speedPlusButton,
        speedMinus: speedMinusButton,
        controlBar: controlBar,
    }
}

document.addEventListener('keydown', (event) => {
    let controls = getControls();
    if (controls === undefined) { return; }

    if (parseFloat(controls.controlBar.style.opacity) === 0) { controls.controlBar.click(); }

    if (event.key === ' ' || event.key === 'k') { controls.play.click(); }
    else if (event.key === 'f') { controls.fullscreen.click(); }
    else if (event.key === 'p') { controls.speedPlus.click(); }
    else if (event.key === 'm') { controls.speedMinus.click(); }
})