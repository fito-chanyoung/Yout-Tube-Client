import React, { useState } from "react";
import "../css/searchbar.css";
export interface SearchBarProps {
  handleKeywordUpdate: Function;
  isDarkMode: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  handleKeywordUpdate,
  isDarkMode,
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
    <div
      className={isDarkMode ? "search-container darkmode" : "search-container"}
    >
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className={isDarkMode ? "SearchBar darkmode" : "SearchBar"}
          placeholder="찾고 싶은 영상의 제목이나 단어를 입력하세요"
          onChange={handleInputValueChange}
        />
        <button
          type="submit"
          className={isDarkMode ? "SearchButton darkMode" : "SearchButton"}
        >
          검색
        </button>
      </form>
    </div>
  );
};
