import "./App.css";
import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { Card } from "./components/Card";
import AddCard from "./components/AddCard";
import { CardWrapper } from "./components/CardWrapper";

const App = () => {
  const [count, setCount] = useState(1);
  const [cardList, setCardList] = useState([
    { title: "Windows", desc: "This is Windows" },
    { title: "IOS", desc: "This is IOS" },
    { title: "Mac OS", desc: "This is Mac OS" },
  ]);

  const handleDelete = (title) => {
    const filteredData = cardList.filter((f) => f.title !== title);
    setCardList(filteredData);
  };

  const onSubmit = (values) => {
    console.log("Form submited!!!", values);
    setCardList([...cardList, values]);
  };

  return (
    <Fragment>
      <AddCard onSubmit={onSubmit} />

      <CardWrapper handleDelete={handleDelete} cardList={cardList} />
    </Fragment>
  );
};

export default App;
