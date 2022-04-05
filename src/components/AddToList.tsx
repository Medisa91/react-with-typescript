import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    img: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }

    setPeople([
      ...people,
      { name: input.name, age: parseInt(input.age), url: input.img, note: input.note },
    ]);

    setInput({
        name: "",
        age: "",
        img: "",
        note: "",
      })
  };

  return (
    <div>
      <div className="AddToList">
        <input
          type="text"
          className="AddToList-input"
          placeholder="Name"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        <input
          type="text"
          className="AddToList-input"
          placeholder="Age"
          name="age"
          value={input.age}
          onChange={handleChange}
        />
        <input
          type="text"
          className="AddToList-input"
          placeholder="Image url"
          name="img"
          value={input.img}
          onChange={handleChange}
        />
        <textarea
          className="AddToList-input"
          placeholder="Notes"
          name="note"
          value={input.note}
          onChange={handleChange}
        />
        <button onClick={handleClick} className="AddToList-btn">Add to list</button>
      </div>
    </div>
  );
};

export default AddToList;
