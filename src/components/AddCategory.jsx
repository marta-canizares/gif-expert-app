import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event)=>{
        setInputValue(event.target.value)
    }

    const onSubmit = (event)=> {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // añadir una nueva categoria sin pisar las anteriores, comunicado con el padre enviado el array
        //setCategories( (categories) => [inputValue, ...categories]);
        onNewCategory(inputValue.trim())
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar Gif"
            value={ inputValue }
            onChange={ onInputChange }
        />

    </form>


  )
}
