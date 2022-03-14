import React, {Component} from "react"
import styled from "styled-components"


const  Mid= styled.div`
    width: 100%;
    height:70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const MidContent =styled.div`
    width: 80%;
    height:80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const Inputs = styled.div`
    width: 30vw;
    display: flex;
    justify-content:space-around;
`
const Input = styled.input`
    border-radius: 0.3vw;
    color:#485DD9;
    background: none;
    background-color:white;
    border-color:#485DD9;
    width: 9vw;
    height: 5vh;
`
const Button = styled.button`
    background: none;
    width: 5vw;
    height: 5vh;
    background-color:#485DD9;
    color:white;
`
const Map = styled.div `
    width: 4vw;
    height: 7vh;
    border-radius: 50%;
    border:1px solid #485DD9;
    color:#485DD9;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:5vh;
`
export default class Main extends Component{
    state ={
        startNumber:'',
        endNumber:'',
        qtd:'',
        numbers:[],
    }

    handleChange = (e) =>{
        this.setState({
            startNumber:e.target.value
        })
    }
    handleChangeTwo = (e) =>{
        this.setState({
            endNumber:e.target.value
        })
    }
    handleChangeThree = (e) =>{
        this.setState({
            qtd:e.target.value
        })
    }
    addNumbers = () =>{
        let {startNumber,endNumber,qtd}=this.state
        let list=[]
        let randn=[]
        let rand
        for(startNumber;startNumber<=endNumber;startNumber++){
            list[startNumber] = startNumber
        }
    
        rand=Math.floor(Math.random() * list.length);
        randn[0]=list[rand]
   
     this.setState({
        numbers: randn,
    })
    
      
       
    }
    render(){
        let {startNumber,endNumber,qtd} = this.state
        let {handleChange,handleChangeTwo,addNumbers,handleChangeThree} = this
        return(
            <Mid>
                <MidContent>
                    <Inputs>
                    <label>de<Input onChange={handleChange} type="number" value={startNumber}/></label>
                    <label>até<Input onChange={handleChangeTwo} type="number" value={endNumber}/></label>
                    <Button onClick={addNumbers}>sortear</Button>
                    </Inputs>
                    {this.state.numbers.map((item)=>(<Map>
                        {item}
                    </Map>))}
                </MidContent>
            </Mid>
        )
        }
}
