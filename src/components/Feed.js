import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import EventIcon from "@material-ui/icons/Event";
import SubjectIcon from "@material-ui/icons/Subject";
import Post from "./Post";
import { Avatar } from "@material-ui/core";
import { db } from "../firebase";
import firebase from "firebase";

const FeedContainer = styled.div`
  flex: 0.5;
  margin: 0 20px;
`;
const FeedInputContainer = styled.div`
  background-color: white;
  padding: 10px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const FeedInput = styled.div`
  border: 1px solid lightgray;
  border-radius: 30px;
  display: flex;
  padding: 10px;
  padding-left: 15px;
  color: gray;

  form {
    display: flex;
    width: 100%;

    input {
      border: none;
      flex: 1;
      margin-left: 10px;
      outline: none;
    }
    button {
      display: none;
    }
  }
`;
const FeedInputOptions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 0px 10px;
`;

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Michael simon",
      description: "Intern Kenya Revenue Services",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <FeedContainer>
      <FeedInputContainer>
        <FeedInput>
          <CreateIcon />
          <form>
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </FeedInput>
        <FeedInputOptions>
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={VideoLibraryIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={SubjectIcon}
            title="Write article"
            color="#7fc15e"
          />
        </FeedInputOptions>
      </FeedInputContainer>

      {/* posts */}

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </FeedContainer>
  );
};

export default Feed;
