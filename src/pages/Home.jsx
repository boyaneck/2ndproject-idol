import React, { useEffect } from "react";
import GlobalStyle from "../components/GlobalStyle";
import Header from "../components/Header";

import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";
import { useState } from "react";

function Home({ list, setList }) {
  let [name, setName] = useState("");
  let [content, setContent] = useState("");
  let [member, setMember] = useState("");

  //닉네임,내용 추가
  let addName = (inputName) => setName(inputName.target.value);
  let addContent = (inputContent) => setContent(inputContent.target.value);

  //댓글추가

  //----------------------
  return (
    <div className="App">
      <GlobalStyle />

      <Header member={member} list={list} setMember={setMember} />

      <CommentInput
        name={name}
        content={content}
        addName={addName}
        addContent={addContent}
        memeber={member}
        setContent={setContent}
        setList={setList}
        list={list}
        setName={setName}
      />
      <CommentList list={list} member={member}></CommentList>

      {/* <Footer /> */}
    </div>
  );
}

export default Home;
