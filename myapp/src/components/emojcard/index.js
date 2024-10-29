import { Component } from "react";
import './index.css'
class EmojCard extends Component{  
    render(){
        const{details,nextemoj}=this.props
        const{imgSrc,name,id}=details
        return(
            <div className="emoj-card" onClick={()=>nextemoj(id)}>
                <img src={imgSrc} alt={name} />
            </div>
        )
    }
}
export default EmojCard