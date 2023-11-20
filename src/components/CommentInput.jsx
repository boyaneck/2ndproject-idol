import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
const MAIN_STYLE = styled.div``;

const COMMENT = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  width: 1150px;
  height: 270px;
`;
const INPUT_BOX = styled.input`
  font-size: 15px;
  height: 30px;
  width: 300px;
  border-radius: 5px;
`;

const SELECT = styled.select`
  align-items: center;

  padding: 5px;
  margin: 0 auto;
  border: 1px solid black;
  width: 100px;
  margin-bottom: 10px;
  border-radius: 5px;
`;
const COMMON_DIV = styled.div`
  align-items: center;

  padding: 5px;
  margin: 0 auto;
`;
const BUTTON = styled.div`
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
const TEXTAREA = styled.textarea`
  font-size: 15px;

  width: 300px;
  border-radius: 5px;
`;
//---------------CSS -------------------
function CommentInput({
  name,
  member,
  addName,
  content,
  addContent,
  setContent,
  setList,
  list,
  setName,
}) {
  const NameRef = useRef("");
  const ContentRef = useRef("");
  const Today = new Date();

  //이름이 20글자를 넘기면 알림과 함께 focus
  useEffect(() => {
    if (name.length >= 20) {
      alert("이름은 20글자를 넘길 수 없습니다.");

      NameRef.current.focus();
    }
  }, [name]);

  //작성글이 200글자를 넘기면 알림
  useEffect(() => {
    if (content.length >= 100) {
      alert("작성글은 100글자를 넘길 수 없습니다.");
      ContentRef.current.focus();
    }
  }, [content]);

  let addList = (e) => {
    if (name.length >= 1 && content.length >= 1) {
      const newCommentList = {
        member,
        id: uuid(),
        name,
        content,
        isShown: true,
        isEditing: false,
        date:
          Today.getFullYear() +
          `년` +
          Today.getMonth() +
          `월` +
          Today.getDate() +
          `일` +
          ` ` +
          Today.getHours() +
          `시` +
          Today.getMinutes() +
          `분`,
        image: "",
      };
      e.preventDefault();
      alert(e.target.content);
      setList([...list, newCommentList]);
      setName("");
      setContent("");
    } else if (name.length < 1) {
      e.preventDefault();
      alert("이름을 입력하세요");
    } else if (content.length < 1) {
      e.preventDefault();
      alert("내용을 입력하세요");
    }
  };

  return (
    <MAIN_STYLE>
      <form>
        <COMMENT>
          <COMMON_DIV>
            닉네임:{" "}
            <INPUT_BOX
              name={name}
              maxLength={20}
              type="text"
              value={name}
              onChange={addName}
              placeholder="최대 20글자 까지 작성 가능합니다."
              ref={NameRef}
            />
          </COMMON_DIV>
          <COMMON_DIV>
            내용 :{" "}
            <TEXTAREA
              ref={ContentRef}
              type="text"
              value={content}
              onChange={addContent}
              maxLength={100}
              rows={7}
              placeholder="최대 100글자 까지 작성 가능합니다."
            />
          </COMMON_DIV>
          <br />

          <SELECT>
            {list.map((list) => {
              return (
                <option key={uuid()} value={list.value}>
                  {list.KR_NAME}
                </option>
              );
            })}
          </SELECT>

          <BUTTON
            type="submit"
            onClick={addList}
            style={{ alignItems: "center" }}
          >
            등록
          </BUTTON>
        </COMMENT>
      </form>
    </MAIN_STYLE>
  );
}

export default CommentInput;
