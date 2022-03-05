import { Form } from "react-bootstrap"
import { useEffect } from "react"

let numbers:any = []
export const Inputs = (props:any) =>{

  useEffect(()=>{
    for (let i = 0; i < props.length; i++) {
      numbers.push(i)
    }
  },[])
  
  const x = numbers.map((broj:any, i:number) => {
    return (
      <Form.Group className="mb-3" style={{ width: '400px', alignItems: 'center' }}>
        <Form.Control type="number" />
      </Form.Group>
    )
  });

  const y = numbers.map((broj:any, i:number) => {
    return (
      <Form.Group className="mb-3" style={{ width: '400px', alignItems: 'center' }}>
        <Form.Control type="number" />
      </Form.Group>
    )
  });

  return(
    <><h6>X:{x}</h6><h6>Y:{y}</h6></>
  )
}