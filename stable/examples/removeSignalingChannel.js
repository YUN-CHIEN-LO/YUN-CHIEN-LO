/**
 * This file demonstrates the process of creating a KVS Signaling Channel.
 */

async function removeSignalingChannel(formValues) {
    const kinesisVideoClient = new AWS.KinesisVideo({
        region: formValues.region,
        accessKeyId: formValues.accessKeyId,
        secretAccessKey: formValues.secretAccessKey,
        sessionToken: formValues.sessionToken,
        endpoint: formValues.endpoint,
    });
    // Get signaling channel ARN
    const describeSignalingChannelResponse = await kinesisVideoClient
        .describeSignalingChannel({
            ChannelName: formValues.channelName,
        })
        .promise();
    const channelARN = describeSignalingChannelResponse.ChannelInfo.ChannelARN;
    const version = describeSignalingChannelResponse.ChannelInfo.Version;
    // console.log('[FETCHING_SIGNALING_CHANNEL] Channel ARN: ', channelARN);
    // // kinesisVideoClient.deleteSignalingChannel(channelARN, function(err, data) {
    // //     if (err) console.log(err, err.stack); // an error occurred
    // //     else console.log(data); // successful response
    // // });
    // kinesisVideoClient.deleteSignalingChannel(channelARN)
    // console.log('[DELETE_SIGNALING_CHANNEL] Channel ARN: ', channelARN);

    var params = {
        ChannelARN: channelARN,
        /* required */
        CurrentVersion: version
    };
    kinesisVideoClient.deleteSignalingChannel(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data); // successful response
    });
}