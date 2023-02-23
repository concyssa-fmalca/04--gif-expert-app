import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']); 

  const onAddCategory = ( newCategory)=>{
    setCategories([newCategory,...categories])
  }


  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory         
        //setCategories={setCategories}           
        onNewCategory ={onAddCategory}
        />
     
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category}/>;
        })}
      </ol>
    </>
  );
}
