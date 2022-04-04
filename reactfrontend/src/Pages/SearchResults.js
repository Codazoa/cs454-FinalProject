import React from "react";
import "../Styling/SearchResults.css";
import SearchBar from "../Components/searchbar";
import Tuple from "../Components/tuple";

function SearchResults() {
    return (
        <div className="SearchResults">
            <header className="SR-header">
                <p>
                    Results for....
                </p>
                <SearchBar placeholder="Enter a Game..." />
                <header className="SR-body">
                    <Tuple />
                    <Tuple />
                    <Tuple />
                    {/* call function to display tuples */}
                </header>
                <header className="SR-body">
                    <Tuple />
                    <Tuple />
                    <Tuple />
                    {/* call function to display tuples */}
                </header>
                <header className="SR-body">
                    <Tuple />
                    <Tuple />
                    <Tuple />
                    {/* call function to display tuples */}
                </header>
            </header>
        </div>
    )
}

export default SearchResults;