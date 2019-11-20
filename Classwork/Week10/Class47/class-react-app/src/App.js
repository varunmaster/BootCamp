import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SpongeBobCard from "./components/SpongeBobCard";
import SquidwardCard from "./components/SquidwardCard";
import MrKrabsCard from "./components/MrKrabsCard";
import Friends from "./components/FriendsCard/index.js";
import friends from "./friends.json";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      <Friends name={friends[0].name} occupation={friends[0].occupation} location={friends[0].location} image={friends[0].image} />
      <Friends name={friends[1].name} occupation={friends[1].occupation} location={friends[1].location} image={friends[1].image} />
      <Friends name={friends[2].name} occupation={friends[2].occupation} location={friends[2].location} image={friends[2].image} />
    </Wrapper>
  );
}

export default App;
