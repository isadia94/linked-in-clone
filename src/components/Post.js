import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import InteractionOption from "./InteractionOption";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

const PostContainer = styled.div`
  background-color: white;
  padding: 10px;
  height: fit-content;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;

  h2 {
    font-size: 14px;
    color: gray;
  }

  p {
    font-size: 12px;
    color: gray;
  }
`;
const PostInfo = styled.div`
  margin-left: 10px;
`;
const PostBody = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;

  p {
    font-size: 14px;
  }
`;

const PostInteractions = styled.div`
  display: flex;

  padding: 20px 10px 0px 10px;
`;

const Post = ({ avatar, name, description, message, photoUrl }) => {
  return (
    <PostContainer>
      <PostHeader>
        {avatar && <Avatar />}
        <PostInfo>
          <h2>{name}</h2>
          <p>{description}</p>
        </PostInfo>
      </PostHeader>
      <PostBody>
        <p>{message}</p>
      </PostBody>
      <PostInteractions>
        <InteractionOption Icon={ThumbUpIcon} title="Like" />
        <InteractionOption Icon={QuestionAnswerIcon} title="Comment" />
        <InteractionOption Icon={ShareIcon} title="Share" />
        <InteractionOption Icon={SendIcon} title="Send" />
      </PostInteractions>
    </PostContainer>
  );
};

export default Post;
