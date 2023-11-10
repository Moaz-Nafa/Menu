import {Container} from "react-bootstrap";
import  {React, useState } from "react";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Category from "./Components/Category";
import ItemsList from "./Components/ItemsList";
import {items} from "./Data";

function App() {
 const [itemsDta, setItemsData] = useState(items);

 //get all cat uniqe
  const allCategory = ['الكل', ...new Set(items.map((i) => i.category))]

//filter By Category
  const FilterByCategory = (cat)=>{
    if(cat === "الكل"){
        setItemsData(items);
    }else{
      const newArry = items.filter((item)=>item.category === cat);
        setItemsData(newArry);
    }
  }

  //filter by search
  const FilterBySearch = (word)=>{
    if(word !== " "){
      const newArry = items.filter((item)=>item.title === word);
        setItemsData(newArry);
    }
  }

  return (
    <div className="App">
      <NavBar FilterBySearch={FilterBySearch}/>
      <Container>
        <Header/>
        <Category FilterByCategory={FilterByCategory} allCategory={allCategory}/>
        <ItemsList itemsDta={itemsDta}/>
      </Container>
    </div>
  );
}

export default App;
