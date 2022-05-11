import { MainPage } from "./components/Main";
import { Card } from "./components/Card";


export default function App() {
  return <div className="App">
        <MainPage/>
  </div>;
}
export  default function App() {
  const data=[
    {
      name:'Abai Kasymov',
      position:'Fronted developer',
      id:'1'
    },
    {
      name:'Altynai Abakirova',
      position:'Fronted developer',
      id:'2'
    },
    {
      name:'Argen Duishobekov',
      position:'Js instuctor',
      id:'3'
    }
  ]
     return 
    <div className="App">
      {
        data.map((el,id)=>{
          return <Card
          name ={el.name}
          position={el.position}
          id={el.id}
          key={el.id}
          />
        })
      }
      <Card/>
    </div>
  
}


