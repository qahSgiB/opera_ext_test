function getIsPlayer()
{
    if (typeof is === 'undefined') { return undefined; }

    let videos = document.getElementsByClassName('vidis');
    if (videos.length !== 1) { return undefined; }
    
    let video = videos[0];
    if (video.isPlayer == undefined) { return undefined; }

    return video.isPlayer;
}

function callIsPlayerAction(isPlayer, action)
{
    let props = isPlayer.props
    props.actions[action].call(props);
}

function connectGainNode(video)
{
    let audioCtx = new AudioContext();
    let gainNode = audioCtx.createGain();
    gainNode.gain.value = 2;

    let source = audioCtx.createMediaElementSource(video);
    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    return gainNode;
}

document.addEventListener('keydown', (event) => {
    let isPlayer = getIsPlayer();
    if (isPlayer == undefined) { return; }

    if (event.key === ' ' || event.key === 'k') { callIsPlayerAction(isPlayer, 'play_bt'); }
    else if (event.key === 'f') { callIsPlayerAction(isPlayer, 'full_screen_bt'); }
    else if (event.key === 'p') { callIsPlayerAction(isPlayer, 'speed_plus'); }
    else if (event.key === 'm') { callIsPlayerAction(isPlayer, 'speed_minus'); }
})