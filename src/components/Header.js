import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 0.1px solid lightgray;
  width: 100%;
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const HeaderLeft = styled.div`
  display: flex;
  img {
    object-fit: contain;
    height: 40px;
    margin-right: 10px;
  }
`;
const HeaderRight = styled.div`
  display: flex;
`;
const HeaderSearch = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  // height: 22px;
  color: gray;
  background-color: #eef3f8;

  input {
    border: none;
    outline: none;
    background: none;
  }
`;
const Header = () => {
  const dispatch = useDispatch();

  const logoutApp = () => {};
  return (
    <HeaderContainer>
      <HeaderLeft>
        <img
          src="https://image.flaticon.com/icons/png/128/174/174857.png"
          alt=""
        />

        <HeaderSearch>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </HeaderSearch>
      </HeaderLeft>
      <HeaderRight>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          onClick={logoutApp}
          avatar={<Avatar></Avatar>}
          title="me"
        />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
