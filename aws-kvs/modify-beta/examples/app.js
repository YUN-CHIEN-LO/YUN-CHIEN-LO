let ROLE = null; // Possible values: 'master', 'viewer', null
let kinesisVideoClient = null;

// video resolution
const qvgaConstraints = {
    // video: { width: { ideal: 320 }, height: { ideal: 240 }, deviceID: { exact: "046d:081b" } }
    width: { ideal: 320 },
    height: { ideal: 240 },
    deviceId: { ideal: "" }
};
const vgaConstraints = {
    // video: { width: { ideal: 640 }, height: { ideal: 480 }, deviceID: { exact: "046d:081b" } }
    width: { ideal: 640 },
    height: { ideal: 480 },
    deviceId: { ideal: "" }
};
const hdConstraints = {
    // video: { width: { ideal: 1280 }, height: { ideal: 720 }, deviceID: { exact: "046d:081b" } }
    width: { ideal: 1280 },
    height: { ideal: 720 },
    deviceId: { ideal: "" }
};
const fullHdConstraints = {
    // video: { width: { ideal: 1920 }, height: { ideal: 1080 }, deviceID: { exact: "046d:081b" } }
    width: { ideal: 1920 },
    height: { ideal: 1080 },
    deviceId: { ideal: "" }
};
var constraints = vgaConstraints



$('#connectStatus').bind('DOMSubtreeModified', function() {
    var reconnect;
    var status = document.getElementById("connectStatus").innerText;
    console.log(status);
    if (status == "disconnected") {
        console.log("reconnect ....");
        // reconnect = setInterval(function(){
        //     stopViewer();
        //     viewerBTN();
        // }, 1000);
        stopViewer();
        viewerBTN();
    }
    if (status == "connected") {
        console.log("connect success");
        clearInterval(reconnect);
    }
});

navigator.mediaDevices.enumerateDevices().then(gotDevices);
var assignCamId;

function gotDevices(mediaDevices) {
    select.innerHTML = '';
    // select.appendChild(document.createElement('option'));
    let count = 0;
    mediaDevices.forEach(mediaDevice => {
        if (mediaDevice.kind === 'videoinput') {
            const option = document.createElement('option');
            option.value = mediaDevice.deviceId;
            const label = mediaDevice.label || `Camera ${count++}`;
            console.log(label)
            const textNode = document.createTextNode(label);
            option.appendChild(textNode);
            select.appendChild(option);
            if (label.includes('046d:081b')) {
                console.log("found", label);
                assignCamId = mediaDevice.deviceId;
                constraints.deviceId = { ideal: assignCamId }
            } else {
                console.log("not found", label);
            }
        }
    });

}

function configureLogging() {
    function log(level, messages) {
        const text = messages
            .map(message => {
                if (typeof message === 'object') {
                    return JSON.stringify(message, null, 2);
                } else {
                    return message;
                }
            })
            .join(' ');
        $('#logs').append($(`<div class="${level.toLowerCase()}">`).text(`[${new Date().toISOString()}] [${level}] ${text}\n`));
    }

    console._error = console.error;
    console.error = function(...rest) {
        log('ERROR', Array.prototype.slice.call(rest));
        console._error.apply(this, rest);
    };

    console._warn = console.warn;
    console.warn = function(...rest) {
        log('WARN', Array.prototype.slice.call(rest));
        console._warn.apply(this, rest);
    };

    console._log = console.log;
    console.log = function(...rest) {
        log('INFO', Array.prototype.slice.call(rest));
        console._log.apply(this, rest);
    };
}

function getRandomClientId() {
    return Math.random()
        .toString(36)
        .substring(2)
        .toUpperCase();
}

function getFormValues() {
    return {
        region: $('#region').val(),
        channelName: $('#channelName').val(),
        clientId: $('#clientId').val() || getRandomClientId(),
        sendVideo: $('#sendVideo').is(':checked'),
        sendAudio: $('#sendAudio').is(':checked'),
        openDataChannel: $('#openDataChannel').is(':checked'),
        widescreen: $('#widescreen').is(':checked'),
        fullscreen: $('#fullscreen').is(':checked'),
        useTrickleICE: $('#useTrickleICE').is(':checked'),
        natTraversalDisabled: $('#natTraversalDisabled').is(':checked'),
        forceTURN: $('#forceTURN').is(':checked'),
        accessKeyId: $('#accessKeyId').val(),
        endpoint: $('#endpoint').val() || null,
        secretAccessKey: $('#secretAccessKey').val(),
        sessionToken: $('#sessionToken').val() || null,
    };
}

function toggleDataChannelElements() {
    if (getFormValues().openDataChannel) {
        $('.datachannel').removeClass('d-none');
    } else {
        $('.datachannel').addClass('d-none');
    }
}

function onStatsReport(report) {
    // TODO: Publish stats
}

function onStop() {
    if (!ROLE) {
        return;
    }

    if (ROLE === 'master') {
        popupM.close();
        stopMaster();
        $('#master').addClass('d-none');
    } else {
        popupV.close();
        stopViewer();
        $('#viewer').addClass('d-none');
    }
    // var closeChannel = window.setTimeout(function() {
    //     $('#master-button').click(() => clearTimeout(this));
    //     $('#form').removeClass('d-none');
    //     const formValues = getFormValues();
    //     // removeSignalingChannel(formValues);
    // }, 10000);

    ROLE = null;
}

window.addEventListener('beforeunload', onStop);

// window.addEventListener('error', function(event) {
//     console.error(event.message);
//     event.preventDefault();
// });

window.addEventListener('unhandledrejection', function(event) {
    console.error(event.reason.toString());
    event.preventDefault();
});

configureLogging();
var popupV;
var popupM;

function popupMaster() {
    popupM = window.open('', '_blank', 'width=640,height=480');
    // console.log(popup)
    const masterViewer = `
            <div id="master-v">
            <div class="video-container style="display: inline-block;
            line-height: 0;
            max-width: 100%;
            width: 49%;
            margin: 0;"><video class="remote-view" id="master-viewer" style="width: 49vw;" autoplay playsinline controls muted></video></div>
            </div>
            <script src="./master.js">
    <script src="./viewer.js">
    <script src="./createSignalingChannel.js">
    <script src="./removeSignalingChannel.js">
    <script src="./app.js">
    `
    popupM.document.write(masterViewer)
}

function masterBtn() {
    ROLE = 'master';
    $('#form').addClass('d-none');
    $('#master').removeClass('d-none');
    var masterViewerDom;
    popupMaster();
    if (popupM != null && !popupM.closed) {
        masterViewerDom = popupM.document.getElementById("master-viewer")
            // alert(masterViewerDom);
        popupM.focus();
    } else {
        alert("Popup has been closed.");
    }

    // alert(masterViewerDom);

    const localView = $('#master .local-view')[0];
    // alert(localView)
    const remoteView = masterViewerDom;
    const localMessage = $('#master .local-message')[0];
    const remoteMessage = $('#master .remote-message')[0];
    const formValues = getFormValues();

    $(remoteMessage).empty();
    localMessage.value = '';
    toggleDataChannelElements();

    startMaster(constraints, localView, remoteView, formValues, onStatsReport, event => {
        remoteMessage.append(`${event.data}\n`);
    });
}

$('#master-button').click(async() => {
    masterBtn();
});

$('#stop-master-button').click(function() {
    // popupM.close();
    onStop();
});

function popupViewer() {
    popupV = window.open('', '_blank', 'width=640,height=480');
    const viewerMaster = `
        <div id="viewer-m">
        <div class="video-container" style="display: inline-block;
        line-height: 0;
        max-width: 100%;
        width: 49%;
        margin: 0;"><video class="remote-view" style="width: 49vw;" id="viewer-master" autoplay playsinline controls muted></video></div>
        </div>
        <script src="./master.js">
<script src="./viewer.js">
<script src="./createSignalingChannel.js">
<script src="./removeSignalingChannel.js">
<script src="./app.js">
`
    popupV.document.write(viewerMaster)
}

function viewerBTN() {
    console.log("viewerBTN");
    ROLE = 'viewer';
    $('#form').addClass('d-none');
    $('#viewer').removeClass('d-none');
    var viewerMasterDom;
    popupViewer();
    if (popupV != null && !popupV.closed) {
        viewerMasterDom = popupV.document.getElementById("viewer-master")
            // alert(viewerMasterDom);
        popupV.focus();
    } else {
        alert("Popup has been closed.");
    }
    const localView = $('#viewer .local-view')[0];
    const remoteView = viewerMasterDom;
    const localMessage = $('#viewer .local-message')[0];
    const remoteMessage = $('#viewer .remote-message')[0];
    const formValues = getFormValues();

    $(remoteMessage).empty();
    localMessage.value = '';
    toggleDataChannelElements();

    startViewer(constraints, localView, remoteView, formValues, onStatsReport, event => {
        remoteMessage.append(`${event.data}\n`);
    });
}

$('#viewer-button').click(async() => {
    viewerBTN();
});

$('#stop-viewer-button').click(function() {
    // popupV.close();
    onStop();
});

$('#create-channel-button').click(async() => {
    const formValues = getFormValues();
    createSignalingChannel(formValues);
});

$('#master .send-message').click(async() => {
    const masterLocalMessage = $('#master .local-message')[0];
    sendMasterMessage(masterLocalMessage.value);
});

$('#viewer .send-message').click(async() => {
    const viewerLocalMessage = $('#viewer .local-message')[0];
    sendViewerMessage(viewerLocalMessage.value);
});

function getSignalingChannelEndpoint() {
    const formValues = getFormValues();
    getSignalingChannelEndpoint(formValues);
}

// Read/Write all of the fields to/from localStorage so that fields are not lost on refresh.
const urlParams = new URLSearchParams(window.location.search);
const fields = [
    { field: 'channelName', type: 'text' },
    { field: 'clientId', type: 'text' },
    { field: 'region', type: 'text' },
    { field: 'accessKeyId', type: 'text' },
    { field: 'secretAccessKey', type: 'text' },
    { field: 'sessionToken', type: 'text' },
    { field: 'endpoint', type: 'text' },
    { field: 'sendVideo', type: 'checkbox' },
    { field: 'sendAudio', type: 'checkbox' },
    { field: 'widescreen', type: 'radio', name: 'resolution' },
    { field: 'fullscreen', type: 'radio', name: 'resolution' },
    { field: 'openDataChannel', type: 'checkbox' },
    { field: 'useTrickleICE', type: 'checkbox' },
    { field: 'natTraversalEnabled', type: 'radio', name: 'natTraversal' },
    { field: 'forceTURN', type: 'radio', name: 'natTraversal' },
    { field: 'natTraversalDisabled', type: 'radio', name: 'natTraversal' },
];
fields.forEach(({ field, type, name }) => {
    const id = '#' + field;

    // Read field from localStorage
    try {
        const localStorageValue = localStorage.getItem(field);
        if (localStorageValue) {
            if (type === 'checkbox' || type === 'radio') {
                $(id).prop('checked', localStorageValue === 'true');
            } else {
                $(id).val(localStorageValue);
            }
            $(id).trigger('change');
        }
    } catch (e) {
        /* Don't use localStorage */
    }

    // Read field from query string
    if (urlParams.has(field)) {
        paramValue = urlParams.get(field);
        if (type === 'checkbox' || type === 'radio') {
            $(id).prop('checked', paramValue === 'true');
        } else {
            $(id).val(paramValue);
        }
    }

    // Write field to localstorage on change event
    $(id).change(function() {
        try {
            if (type === 'checkbox') {
                localStorage.setItem(field, $(id).is(':checked'));
            } else if (type === 'radio') {
                fields
                    .filter(fieldItem => fieldItem.name === name)
                    .forEach(fieldItem => {
                        localStorage.setItem(fieldItem.field, fieldItem.field === field);
                    });
            } else {
                localStorage.setItem(field, $(id).val());
            }
        } catch (e) {
            /* Don't use localStorage */
        }
    });
});


function unmuteM() {
    popupM.document.getElementById("master-viewer").muted = false;
    // popupM.document.getElementById("master-viewer").play();
}

function unmuteV() {
    popupV.document.getElementById("viewer-master").muted = false;
    // popupV.document.getElementById("viewer-master").play();
}

// The page is all setup. Hide the loading spinner and show the page content.
$('.loader').addClass('d-none');
$('#main').removeClass('d-none');
console.log('Page loaded');