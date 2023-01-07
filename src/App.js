import { useState } from "react"; 
import AddStudent from "./AddStudent";
import SInClass from "./SInClass";
import SoutClass from "./SoutClass";

function App() {
  const [sic,setSic] = useState([]);
  const [soc,setSoc] = useState([]);
  const [name,setName] = useState("");
  const [roll,setRoll] = useState("");



  const adds = (e)=>{
    e.preventDefault();
    const stud = {
      id: sic.length + soc.length,
      name: name,
      roll: roll,
      intime:Date(),
      outtime:"",
    }
    setSic((arr)=>{
      return [...arr,stud]
    })
    setName("");
    setRoll("");
  }

  const removes = (id)=>{
    const newsic = sic.filter((item) => {
      return item.id != id;
    })
    let bait;
    for(let i =0;i < sic.length;i++){
      if(id == sic[i].id){
        bait = {
          ...sic[i],outtime:Date()
        }
      }
    }

    setSic(newsic);
    setSoc((values)=>{
      return [...values,{...bait}]
    });
  }

  return (
    <div>
      <AddStudent
        name = {name}
        setName = {setName}
        roll = {roll}
        setRoll = {setRoll}
        adds = {adds}
      />
      <SInClass
        sic = {sic}
        removes = {removes}
      />
      <SoutClass
        soc = {soc}
      />
    </div>
  );
}

export default App;
