import styled from "styled-components";
import { Button, Input } from "antd";

export const PlayButton = styled(Button)`
  position: absolute;
  right: 5px;
  cursor: pointer;
`;

export const AddVideoWrapper = styled("div")`
  margin-bottom: 10px;
`;

export const PlaylistWrapper = styled("div")`
  margin: 10px;
  max-height: 400px;
`;

export const YoutubeInput = styled(Input)`
  width: 350px;
`;
