import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = ()=> {
    const [categories, setCategories] = useState(['Arale', 'Pokemon'])
    
    // Añadir una nueva categoría al array
    const onAddCategory = (newCategory) => {

        // con esto filtramos la key, para que no haya dos iguales. Es un filtro
        if( categories.includes(newCategory) ) return;


        // Añadir una nueva categoría al array
        setCategories( [newCategory, ...categories  ])
    }

    return (
        <>
        {/* Titulo */}
        <h1>Gif Expert App</h1>

        {/* Input */}
        <AddCategory //setCategories ={ setCategories }
            onNewCategory ={ onAddCategory }
        />

        {/* Listado de Gif */}
        { categories.map( (category) => ( 
                <GifGrid 
                key={ category } 
                category={ category }/>
            ))
        }

        {/* Gif Item */}
        </>
    )
}