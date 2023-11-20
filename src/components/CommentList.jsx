import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
const MAIN_STYLE = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const LIST_STYLE = styled.div`
  background-color: #ccf6ee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  text-align: center;
  margin: 15px 0;
  height: 120px;
  width: 700px;
  padding: 10px;
  border: 1px solid #006b6c;
  border-radius: 10px;
  cursor: pointer;
`;
const TITLE = styled.div`
  font-weight: bold;
  margin: 10px 0;
`;
const DATE = styled.div`
  font-weight: bold;
  margin: 10px 0;
`;
const CONTENT = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 20px;
  background-color: white;
  width: 700px;
  height: 50px;
  padding: 5px;
  border-radius: 10px;
  margin: 7px 0;
`;
//-------------------CSS------------------------

function CommentList({ list, member, Edit }) {
  const navigate = useNavigate();

  const navigation = (thisID, name, content, isEditing) => {
    const data = { thisID, name, content, isEditing };
    navigate(
      "/detail/" + thisID,
      { state: data },
      {
        state1: () => {
          console.log("sss");
        },
      }
    );
  };

  return (
    <MAIN_STYLE>
      {list.map((commentList) => {
        if (commentList.member === member) {
          return (
            <LIST_STYLE
              key={uuid()}
              onClick={() => {
                navigation(
                  commentList.id,
                  commentList.name,
                  commentList.content,
                  commentList.isEditing
                );
              }}
            >
              <TITLE> 닉네임 :&nbsp;{commentList.name}</TITLE>

              <CONTENT>
                <div> 내용:&nbsp;{commentList.content} </div>
              </CONTENT>
              <DATE>날짜:&nbsp;{commentList.date}</DATE>
            </LIST_STYLE>
          );
        }
      })}
    </MAIN_STYLE>
  );
}

export default CommentList;
