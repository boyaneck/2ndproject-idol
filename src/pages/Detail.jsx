import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { useLocation } from "react-router-dom";

function Detail({ list, member, ContentEdit, setList }) {
  const DETAIL_MAIN_STYLE = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    background-color: #ccf6ee;
    border: 3px solid black;
    width: 400px;
    height: 400px;
  `;
  const INPUT_BOX = styled.input`
    background-color: transparent;
    padding: 20px;
    margin: 20px;
    border: none;
    font-weight: bold;
  `;
  const CONTENT_DIV = styled.div`
    padding: 10px;
    background-color: white;
    border: none;
    margin: 20px;
    font-weight: bold;
    width: 300px;
    height: 100px;
  `;
  const TEXTAREA = styled.textarea`
    padding: 10px;
    font-weight: bold;
    background-color: white;
    border: none;
    margin: 20px;
    font-weight: bold;
    width: 300px;
    height: 100px;
  `;
  const LINK = styled.a`
    border: 1px solid black;
    text-decoration: none;
    align-items: center;

    padding: 5px;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    width: 100px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: #006b6c;
      color: white;
    }
  `;
  const HOME_TAG = styled.div`
    margin-top: 60px;
  `;
  const NAME_DIV = styled.div`
    margin: 10px 0 10px 20px;
    font-weight: bold;
  `;
  const UPDATE_BUTTON = styled.button`
    border: 1px solid black;
    text-decoration: none;
    align-items: center;
    background-color: white;

    padding: 5px;
    margin-top: 20px;
    margin-right: 38%;
    float: right;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    width: 100px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: #006b6c;
      color: white;
    }
  `;
  const DELETE_BUTTON = styled.button`
    border: 1px solid black;
    text-decoration: none;
    align-items: center;
    background-color: white;

    padding: 5px;
    margin-top: 20px;
    margin-right: 10px;
    float: right;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    width: 100px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: #006b6c;
      color: white;
    }
  `;
  // -------------------------CSS ---------------------------------

  const location = useLocation();
  const Member = location.state;

  console.log("편집중", Member);
  //삭제함수

  const DeleteContent = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      let newList = list.filter((ToDeleteList) => {
        return ToDeleteList.id !== Member.thisID;
      });
      setList(newList);
      window.history.back();
    }
  };

  const [edit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState(Member.content);
  //수정하기함수
  // let update = () => {
  //   for (let i = 0; i < list.length; i++) {
  //     if (list[i].name === Member.name) {
  //       setEdit(true);
  //       list[i].isEditing = edit;
  //       console.log("나와라 얍얍얍", list[i].isEditing, Member.name);
  //       let newList = [...list];
  //       setList([newList]);
  //     }
  //   }
  // };
  let update = () => {
    if (confirm("수정하시겠습니까?")) {
      setEdit(true);
    }
  };
  let cancelUpdate = () => {
    setEdit(false);
  };

  let ContentUpdate = () => {
    setEdit(false);
  };
  {
    if (edit === false) {
      return (
        <>
          <HOME_TAG>
            <LINK href="/">홈버튼</LINK>
          </HOME_TAG>
          <DETAIL_MAIN_STYLE>
            <NAME_DIV>{Member.name}</NAME_DIV>
            <CONTENT_DIV>{Member.content}</CONTENT_DIV>
          </DETAIL_MAIN_STYLE>{" "}
          <UPDATE_BUTTON onClick={update}>수정</UPDATE_BUTTON>
          <DELETE_BUTTON onClick={DeleteContent}>삭제</DELETE_BUTTON>
        </>
      );
    } else if (edit === true) {
      return (
        <>
          <HOME_TAG>
            <LINK href="/">홈버튼</LINK>
          </HOME_TAG>
          <form onSubmit={(event) => {}}>
            <DETAIL_MAIN_STYLE>
              <TEXTAREA
                name="content"
                rows={7}
                value={editContent}
                onChange={(event) => {
                  setEditContent(event.target.value);
                }}
              ></TEXTAREA>
            </DETAIL_MAIN_STYLE>
            <UPDATE_BUTTON onClick={ContentUpdate} type="submit" value="update">
              수정하기
            </UPDATE_BUTTON>
            <DELETE_BUTTON
              type="submit"
              value="cancelUpdate"
              onClick={cancelUpdate}
            >
              취소하기
            </DELETE_BUTTON>
          </form>
        </>
      );
    }
  }
}

export default Detail;
