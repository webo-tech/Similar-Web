import { Button, Input } from "antd";
import React, { useState } from "react";
import { YoutubeInput, AddVideoWrapper } from "../style";

export default (props) => {
  const [url, setUrl] = useState("");

  function onAddSong() {
    props.addNewSong(url);
    setUrl("");
  }

  return (
    <AddVideoWrapper>
      <YoutubeInput
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="YOUTUBE URL"
      />
      <Button type="primary" onClick={onAddSong}>
        Add Song
      </Button>
    </AddVideoWrapper>
  );
};
