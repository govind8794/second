import React from 'react'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room2: false,
      room3: false,
      room4: false
    }
  }
  componentDidMount(){
    try{
      let data = JSON.parse(localStorage.getItem("data"));
      console.log(data);
      this.setState({...data});
    }catch(e){      
      // no previous data
    }

  }
  handleChange(room, e) {
    
    this.setState({ room2: false, room3: false, room4: false })
    for(var i =2;i<=room;i++){
      if(i<=room){
          this.setState({["room"+i]:e.target.checked});
      }else{
          this.setState({["room"+i]:!e.target.checked})
      }
    }
    
  }
  onSubmit(){
    localStorage.setItem("data", JSON.stringify(this.state));
  }
  render() {
    return (
      <div>
        <div className='hero'>
          <div className='row'>
            <a className='card'>
              <h3>Room 1</h3>
              <div className="card_inner" disabled={true}>
                <span>
                  <label>
                    Adults(18+)
            <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </label>
                </span>
                <span>
                  <label>
                    Children(0-17)
            <select>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </label>
                </span>
              </div>

            </a>
            <a className='card'>
              <h3><input type="checkbox" name="room2" checked={this.state.room2} onChange={(e) => this.handleChange("2", e)}></input>Room 2</h3>
              <div className="card_inner" >
                <span>
                  <label>
                    Adults(18+)
            <select disabled={!this.state.room2}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </label>
                </span>
                <span>
                  <label>
                    Children(0-17)
            <select disabled={!this.state.room2}>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </label>
                </span>
              </div>
            </a>
            <a className='card'>
              <h3><input type="checkbox" checked={this.state.room3} onChange={(e) => this.handleChange("3", e)} />Room 3</h3>
              <div className="card_inner" disabled={!this.state.room3}>

                <span>
                  <label>
                    Adults(18+)
            <select disabled={!this.state.room3}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </label>
                </span>
                <span>
                  <label>
                    Children(0-17)
            <select disabled={!this.state.room3}>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </label>
                </span>
              </div>
            </a>
            <a className='card'>
              <h3><input type="checkbox" checked={this.state.room4} onChange={(e) => this.handleChange("4", e)} />Room 4</h3>
              <div className="card_inner" disabled={!this.state.room4}>

                <span>
                  <label>
                    Adults(18+)
            <select disabled={!this.state.room4}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </label>
                </span>
                <span>
                  <label>
                    Children(0-17)
            <select disabled={!this.state.room4}>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </label>
                </span>
              </div>
            </a>

          </div>
          <div className="row">
            <button type="button" onClick={()=>this.onSubmit()}>Submit</button>
          </div>

        </div>

        <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        margin:20px;
        padding: 18px 18px 24px;
        width: 300px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
        
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      .card_inner{
        display:flex;
      }
      .card_inner span{
        padding:10px;
      }
      
    `}</style>
      </div >
    )
  }
}

export default Home;
