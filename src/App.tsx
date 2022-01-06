import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { LisItem } from './components/listiitems';
import { AddArea } from './components/AddItem';

const App = () => {
  const [List, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o Pao na padaria', done: false},
    { id: 2, name: 'Comprar um bolo na padaria', done: true},
  ]);

  const handleAddTask = (taskName: string) =>{
    let newList = [...List];
    newList.push({
      id: List.length + 1,
      name: taskName,
      done: false
    });
    setList(newList)
  }

  return(
    <C.Container>
      <C.ball/>
      <C.Area>
        <C.Header>Lista de terefas</C.Header>

        <AddArea onEnter={handleAddTask}/>

        <C.ContainerBotton>
          <C.Bottons>a</C.Bottons>
          <C.Bottons>b</C.Bottons>
        </C.ContainerBotton>

        <C.AreaT>
        {List.map((item, index)=>(
          <LisItem key={index} item={item} />
        ))}
        </C.AreaT>
      </C.Area>
    </C.Container>
  );
}

export default App;