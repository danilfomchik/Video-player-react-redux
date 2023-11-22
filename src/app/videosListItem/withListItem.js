import moment from "moment";
import { useGetChannelInfoQuery, useGetVideoInfoQuery } from "../../api/api";

const withListItem = (ListItemLayout, VideoDescription) => {
    return ({ video, type }) => {
        const {
            id,
            snippet: { channelId },
            contentDetails,
        } = video;

        const _videoId = id?.videoId || contentDetails?.videoId || id;

        const {
            data: channelInfo,
            isLoading: isChannelInfoLoading,
            isFetching: isChannelInfoFetching,
        } = useGetChannelInfoQuery(channelId, { refetchOnReconnect: true });

        const {
            data: videoInfo,
            isLoading: isVideoInfoLoading,
            isFetching: isVideoInfoFetching,
        } = useGetVideoInfoQuery(_videoId, { refetchOnReconnect: true });

        const givenDuration = videoInfo?.items[0]?.contentDetails?.duration;

        const seconds = moment.duration(givenDuration).asSeconds();
        const _duration = moment
            .utc(seconds * 1000)
            .format(givenDuration?.includes("H") ? "h:mm:ss" : "mm:ss");

        return (
            <ListItemLayout
                VideoDescription={VideoDescription}
                type={type}
                videoId={_videoId}
                channelInfo={channelInfo}
                isChannelInfoLoading={isChannelInfoLoading}
                videoInfo={videoInfo}
                isVideoInfoLoading={isVideoInfoLoading}
                duration={_duration}
            />
        );
    };
};

export default withListItem;
