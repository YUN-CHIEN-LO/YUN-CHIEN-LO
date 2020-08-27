async function getSignalingChannelEndpoint(formValues) {



    // Create KVS client
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
    console.log('[CREATE_SIGNALING_CHANNEL] Channel ARN: ', channelARN);
    const getSignalingChannelEndpoint = await kinesisVideoClient
        .getSignalingChannelEndpoint({
            ChannelARN: channelARN,
            SingleMasterChannelEndpointConfiguration: {
                Protocols: ["HTTPS"],
                Role: "MASTER"
            }
        })
        .promise();
    const ResourceEndpointList = getSignalingChannelEndpoint.ResourceEndpointList();
    console.log('[GET_SIGNALING_CHANNEL_ENDPOINT] ResourceEndpointList: ', ResourceEndpointList);
    // return kinesisVideoClient;
}