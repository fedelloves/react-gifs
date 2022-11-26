import {useState} from 'react'
import {AddCategory, GifGrid} from './components';

const GifExpertApp = () => {
    const apiKey = 'kJADdQuKD2ar6Q6hVnhpFFaJfXJG9rDq';

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        //setCategories( cat => [...cat, 'Valorant']);
    }

    return (
        <>
            <h1>PNT Gifs App</h1>
            <AddCategory onNewCategory={onAddCategory}/>
            {
                categories.map( (category) => (
                    <GifGrid key={category} category={category}></GifGrid>
                ))
            }
        </>
    )
}

export default GifExpertApp