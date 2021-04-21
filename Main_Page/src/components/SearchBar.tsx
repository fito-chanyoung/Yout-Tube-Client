import React, { useState } from "react";
export interface SearchBarProps {
  handleKeywordUpdate: Function;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  handleKeywordUpdate,
}) => {
  const [value, valueHandler] = useState("");

  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //this.setState({ value: e.target.value });
    valueHandler(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleKeywordUpdate(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="SearchtBar"
          placeholder="찾고 싶은 영상의 제목이나 단어를 입력하세요"
          onChange={handleInputValueChange}
        />
        <button type="submit" className="SearchtButton">
          검색
        </button>
      </form>
    </div>
  );
};
