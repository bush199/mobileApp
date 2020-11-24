import React  from 'react'
import './show.css'
import {Link} from 'react-router-dom'


export default class Show extends React.Component {
  constructor(){
      super();
      this.state={
          name:""
      }
  }

  displayProduct1 =()=>{
      this.setState({
          name:<Child1 />
      })
  } 
  displayProduct2 =()=>{
    this.setState({
        name:<Child2 />
    })
} 
displayProduct3 =()=>{
    this.setState({
        name:<Child3 />
    })
} 
displayProduct4 =()=>{
    this.setState({
        name:<Child4 />
    })
} 
  displayProduct5 =()=>{
      this.setState({
          name:<Child5 />
      })
  } 
  displayProduct6 =()=>{
      this.setState({
          name:<Child6 />
      })
  } 
  
         render() {
      return (
          <div> 

            <nav class="navbar navbar-expand-lg navbar-light bg-danger">
  <Link class="navbar-brand" href="#"><b>Mobile Store</b></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
       <li class="nav-item active">
        <Link class="nav-link" href="">Show Mobiles</Link>
      </li>
      <li class="nav-item7 active">
        <Link class="nav-link" to="/Home">Logout</Link>
      </li>
    </ul>
  </div>
</nav>  


<div class="container" >
 <div>{this.state.name} </div>
</div>
              <div className="container">
             
         {/* card */}
         <div className="card-deck">
<div class="card" id="c1">
  <img className="showimg" src="01_Redmi Note 9.jpg"  height="200px" width="100px" alt="" onClick={this.displayProduct1}/>
  
  <div class="card-body">
      <h5>Redmi Note 9 Pro</h5>
  </div>
</div>
<div class="card" id="c1">
<img className="showimg" src="02_Iphone max pro.jpg" height="200px" width="100px" alt="" onClick={this.displayProduct2}/>
  <div class="card-body">
      <h5>iPhone 11 Max Pro</h5>
  </div>
</div>
<div class="card" id="c1">
<img className="showimg" src="03_Oppo.jpg"  height="200px" width="100px" alt="" onClick={this.displayProduct3}/>
  <div class="card-body">
      <h5>Oppo f15 Pro</h5>
  </div>
</div>
<div class="card" id="c1">
<img className="showimg" src="04_Vivo.jpg" height="200px" width="100px" alt="" onClick={this.displayProduct4}/>
  <div class="card-body">
      <h5>Vivo v11 Pro</h5>
  </div>
</div>
<div class="card" id="c1">
<img className="showimg" src="05_samsung s10.jpeg" height="200px" width="100px" alt="" onClick={this.displayProduct5}/>
  <div class="card-body">
      <h5>Samsung s10</h5>
  </div>
</div>
<div class="card" id="c1">
<img className="showimg" src="06_oneplus.jpeg" height="200px" width="100px" alt="" onClick={this.displayProduct6}/>
  <div class="card-body">
      <h5>OnePlus Nord</h5>
  </div>
</div>
</div>


          </div>
          </div>
      )
  }
}


class Child1 extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="01_Redmi Note 9.jpg" height="200px" width="100px" alt="" />
               <div className="card-body">
               <h4 className="card-title">Redmi Note 9 pro</h4>
               <p className="card-text">
                   Color: Grey <br/>
                   RAM: 4GB <br/>
                   Storage:64GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Child2 extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="02_Iphone max pro.jpg" height="200px" width="100px" alt="" />
               <div className="card-body">
               <h4 className="card-title">iPhone 11 Max Pro</h4>
               <p className="card-text">
                   Color:Black <br/>
                   RAM: 6GB <br/>
                   Storage:128GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Child3 extends React.Component{
    render(){
        return(
            <div>
               <div className="container">
                <div id="c2" className="card col-md-6">
                <img className="card-img-top" src="03_Oppo.jpg" height="200px" width="100px" alt="" />
                 <div className="card-body">
                 <h4 className="card-title">Oppo f15 Pro</h4>
                 <p className="card-text">
                     Color:Blaising Blue<br/>
                     RAM: 6GB <br/>
                     Storage:128GB<br/>
                      </p>
            </div>
            </div>
               </div>
            </div>
           
        )
    }
  }

  class Child4 extends React.Component{
    render(){
        return(
            <div>
               <div className="container">
                <div id="c2" className="card col-md-6">
                <img className="card-img-top" src="04_Vivo.jpg"  height="200px" width="100px" alt="" />
                 <div className="card-body">
                 <h4 className="card-title">Vivo v11 Pro</h4>
                 <p className="card-text">
                     Color:Blue<br/>
                     RAM: 6GB <br/>
                     Storage:256GB<br/>
                      </p>
            </div>
            </div>
               </div>
            </div>
           
        )
    }
  }
  class Child5 extends React.Component{
    render(){
        return(
            <div>
               <div className="container">
                <div id="c2" className="card col-md-6">
                <img className="card-img-top" src="05_samsung s10.jpeg"  height="200px" width="100px" alt="" />
                 <div className="card-body">
                 <h4 className="card-title">Samsung s10 </h4>
                 <p className="card-text">
                     Color: Black <br/>
                     RAM: 4GB <br/>
                     Storage:64Gb<br/>
                      </p>
            </div>
            </div>
               </div>
            </div>
           
        )
    }
  }
class Child6 extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="06_oneplus.jpeg" height="200px" width="100px" alt="" />
               <div className="card-body">
               <h4 className="card-title">OnePlus Nord</h4>
               <p className="card-text">
                   Color: Grey <br/>
                   RAM: 6GB <br/>
                   Storage:64GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}














