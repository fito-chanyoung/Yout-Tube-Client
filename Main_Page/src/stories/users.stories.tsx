import * as React from "react";
import { User, UserProps } from "../page/User";
import { Story } from "@storybook/react";

export default {
  title: "YourTube/User",
  component: User,
};
const Template: Story<UserProps> = (args) => <User {...args} />;

export const accToken = Template.bind({});
accToken.args = {
  accessToken: "",
  profile: {
    email: "zpxlffjrm-6077@pages.plusgoogle.com",

    name: "아이스레이크",
  },
};
