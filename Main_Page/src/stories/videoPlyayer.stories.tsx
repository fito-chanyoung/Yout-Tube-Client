import * as React from "react";
import { VideoPlayer, PlayerProps } from "../components/VideoPlayer";
import { Story } from "@storybook/react";
import "../css/videoPlayer.css";

export default {
  title: "YourTube/VideoPlayer",
  component: VideoPlayer,
};
const Template: Story<PlayerProps> = (args) => <VideoPlayer {...args} />;

export const accToken = Template.bind({});
accToken.args = {
  currentVideo: {
    id: 123,
    etag: "DM0zdobIb3fWIIoYaUQ4Y8KcqbE",
    videoId: "q-2wNALFn7w",
    channelId: "UChmKaIPo6JdkwD9PHc0sz5g",
    title: "AXIOM-Professional Gaming Case with Dust Collector",
    description:
      "AXIOM의 S-필터는 유입되는 공기 중 먼지만 집진함으로 분리하고 깨끗한 공기는 내부로 유입시키는 세계 유일의 PC 케이스입니다. 이로써 청소의 편리함을 제공하며 안정성을 극대화...",
    thumbnail: "https://i.ytimg.com/vi/q-2wNALFn7w/hqdefault.jpg",
    createdAt: " 2021-04-19 08:18:18",
    updatedAt: " 2021-04-19 08:18:18",
  },
};
