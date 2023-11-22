import VideoSkeleton from "./video/VideoSkeleton";

let skeletonList = [];

for (let i = 0; i < 24; i++) {
    skeletonList[i] = <VideoSkeleton key={i} />;
}

export default skeletonList;
