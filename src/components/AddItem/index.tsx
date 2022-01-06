import { useState, KeyboardEvent } from 'react';
import * as C from './style';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('');
    const handleKeyUp = (e: KeyboardEvent) =>{
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <C.Container>
            <input 
                type="text"
                placeholder="Adicione uma tarefa"
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
            <div className="text"><i className="fas fa-plus"/></div>
        </C.Container>
    );
}