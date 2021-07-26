import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  top: 80px;
  position: sticky;
  flex: 0.2;
  border-radius: 10px;
  text-align: center;
  height: fit-content;
`;
const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  padding-bottom: 10px;

  p {
    font-size: 12px;
    color: darkgray;
    padding: 0 10px;
  }
`;
const SidebarImage = styled.img`
  margin-bottom: -20px;
  width: 100%;
  height: 60px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
`;
const SidebarStats = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const SidebarStat = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  p {
    color: gray;
    font-size: 13px;
    font-weight: 600;

    &:hover {
      cursor: pointer;
    }
  }
`;
const SidebarBottom = styled.div`
  text-align: left;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
  margin-top: 10px;
`;
const Sidebar = () => {
  const RecentItem = (topic) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span style={{ marginTop: "10px", fontWeight: "bold", color: "gray" }}>
        #
      </span>
      <p
        style={{
          marginLeft: "10px",
          marginTop: "10px",
          fontSize: "12px",
          fontWeight: "bold",
          color: "darkgray",
        }}
      >
        {topic}
      </p>
    </div>
  );

  return (
    <SidebarContainer>
      <SidebarTop>
        <SidebarImage src="https://images.unsplash.com/photo-1627079212643-adf54c35e852?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        <Avatar style={{ marginBottom: "10px" }} />
        <h2>Brian Lusigi</h2>
        <p>Officer Strategy & Innovation Kenya Revenue Authority</p>
      </SidebarTop>
      <SidebarStats>
        <SidebarStat>
          <p>Connections</p>
          <p style={{ fontWeight: "bold", color: "#0a66c2" }}>49</p>
        </SidebarStat>
        <SidebarStat>
          <p>Who viewed your profile</p>
          <p style={{ fontWeight: "bold", color: "#0a66c2" }}>6</p>
        </SidebarStat>
      </SidebarStats>
      <SidebarBottom>
        <p style={{ fontSize: "13px" }}>Recent</p>
        {RecentItem("Reactjs")}
        {RecentItem("Data Analytics")}
        {RecentItem("Programming")}
        {RecentItem("Cat Videos")}
        {RecentItem("New Skills")}
      </SidebarBottom>
    </SidebarContainer>
  );
};

export default Sidebar;
