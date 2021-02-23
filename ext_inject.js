let extScript = document.createElement('script');
extScript.src = chrome.runtime.getURL('ext.js');

document.head.appendChild(extScript)