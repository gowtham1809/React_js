import {useState} from 'react';
export default function Player({ initialName, symbol,isActive,onChangeName }) {
  const [PlayerName,setPlayerName]=useState(initialName);
  const [isEdit,setisEdit]=useState(false);

  function handleEdit(){
      setisEdit((isedit)=>!isedit);
      if(isEdit){
      onChangeName(symbol,playerName);
      }
  }

  function handlechange(event){
    setPlayerName(event.target.value)
  }

  let playerName=<span className="player-name">{PlayerName}</span>;
  if(isEdit){
    playerName=<input type='text' defaultValue={PlayerName}onChange={handlechange}required></input>
  }

  return (
    <li className={isActive ? 'active':undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEdit ? 'Save': 'Edit'}</button>
    </li>
  );
}
