import Button  from "react-bootstrap/Button"
import { Link } from "react-router-dom"

export const Homepage = () =>{
  return(
    <>
      <h2>Aproksimacija funkcija</h2>
      <div style={{display:'block', marginTop:'100px'}}>
      <div style={{display:'block', marginBottom:'50px'}} >
      <Link to='/valueentry'><Button style={{width:'300px'}}>Unesi vrijednosti</Button></Link>
      </div>
      <div style={{display:'block', marginBottom:'50px'}}>
      <Button style={{width:'300px'}}>Unesi vrijednosti iz datoteke</Button>
      </div>
      <div style={{display:'block', marginBottom:'100px'}}>
      <Button style={{width:'300px'}}>Unesite funkciju za aproksimaciju</Button>
      </div>
      </div>
    </>
  )
}