import {polionomialLsm, submitValues} from './utils'
import { useEffect, useRef } from "react"

import { Button } from "react-bootstrap"
import { Form } from "react-bootstrap"
import {PlotGraph} from './Plot'
import { useState } from "react"

let numbers:any = []
let a:any = []

export const ValueEntry = () => {
  const input = useRef<HTMLInputElement>(null)
  const entries = useRef<HTMLInputElement>(null)
  const [set, setSet] = useState(false)

  const confirmNumber = () => {
    for (let i = 0; i < parseInt(input.current!.value)*2; i++) {
      numbers.push(i)
    }
    for (let i = 0; i < parseInt(input.current!.value)*2; i++) {
      a.push(i)
    }
    setSet(true)
  }

  const x = numbers.map((broj:any, i:number) => {
    return (
      <>
      {i==0 && <>X</>} 
      {i==(numbers.length/2) && <>Y</>} 
      <Form.Group className="mb-3" style={{ width: '400px', alignItems: 'center' }}>
        <Form.Control type="number" onChange={(event)=>{a[i]=event?.target.value}}/>
      </Form.Group>
      </>
    )
  });

  return (
    <>
      {!set ? <div style={{ marginTop: '10%' }}>
        <h4>Broj tacaka</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Form.Group className="mb-3" style={{ width: '400px', alignItems: 'center' }}>
            <Form.Control placeholder="Broj tacaka" type="number" ref={input} />
          </Form.Group>
        </div>
        <Button onClick={confirmNumber}>Potvrdi</Button>
      </div> : <><h6>{x}</h6><Button onClick={()=>{submitValues(a, a.length/2)}}>Confirm values</Button><Button onClick={()=>{polionomialLsm(submitValues(a, a.length/2), 3)}}>Polinomijalna</Button></>
      
      }
    </>
  )
}