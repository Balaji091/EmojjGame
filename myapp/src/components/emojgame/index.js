import{Component} from "react"
import EmojCard from "../emojcard";
import './index.css'
import ResultCard from "../resultcard";
const emojiList =[
    { id: 1, name: "Smiling Face", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F60A.png?raw=true" },
    { id: 2, name: "Laughing Face", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F602.png?raw=true" },
    { id: 3, name: "Heart Eyes", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F60D.png?raw=true" },
    { id: 4, name: "Thumbs Up", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F44D.png?raw=true" },
    { id: 5, name: "Clapping Hands", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F44F.png?raw=true" },
    { id: 6, name: "Winking Face", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F609.png?raw=true" },
    { id: 7, name: "Thinking Face", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F914.png?raw=true" },
    { id: 8, name: "Crying Face", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F622.png?raw=true" },
    { id: 9, name: "Fire", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F525.png?raw=true" },
    { id: 10, name: "Star-Struck", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F929.png?raw=true" },
    { id: 11, name: "Party Popper", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F389.png?raw=true" },
    { id: 12, name: "Rocket", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F680.png?raw=true" },
    { id: 13, name: "Red Heart", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/2764.png?raw=true" },
    { id: 14, name: "Face Palm", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F926.png?raw=true" },
    { id: 15, name: "Sleeping Face", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F634.png?raw=true" },
    { id: 16, name: "Brain", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F9E0.png?raw=true" },
    { id: 17, name: "Flexed Bicep", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F4AA.png?raw=true" },
    { id: 18, name: "Pizza", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F355.png?raw=true" },
    { id: 19, name: "Ghost", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F47B.png?raw=true" },
    { id: 20, name: "Alien", imgSrc: "https://github.com/hfg-gmuend/openmoji/blob/master/color/72x72/1F47D.png?raw=true" }
  ];
  class EmojGame extends Component{
    state={current:0,top:0,shuffleList:emojiList,clicked:null,show:false,result:null}
    shuffleEmojis = (emojiArray) => {
        return emojiArray.sort(() => Math.random() - 0.5);
      };
    nextemoj=id=>{
        const{clicked,current,top,shuffleList,show,result}=this.state
        if(clicked===null || clicked===id)
        {
            this.setState({clicked:id,
                shuffleList:this.shuffleEmojis(emojiList),
                current:current+1
               
            })}
            
        else{
            
            this.setState({
                result:current,
                top:Math.max(current,top),
                current:0,show:!show
            })
        }
    }
    setResult=()=>{
        const{show}=this.state
        this.setState({show:!show,clicked:null})

    }
    render(){
        const{top,current,shuffleList,show,result}=this.state
        return(
            <div>
                <div className="nav">
                   <h1>Emojj Game</h1>
                   <div className="score">
                        <p>Current Score:{current}</p>
                        <p>Top Score:{top}</p>
                    </div>  
                </div>
                <div className="emoji-container">
                   { show?<ResultCard score={result} setResult={this.setResult}/>:shuffleList.map(item=>(<EmojCard details={item} key={item.id} nextemoj={this.nextemoj}/>))}
                </div>
                   
            </div>
        )
    }
  }
  export default EmojGame