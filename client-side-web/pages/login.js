import React from 'react';


const divStyle ={
    //color: "blue",
    //display: flex,
    //justify-content: "center",
    fontfamily: "Roboto, Arial, sans-serif",
    //font-size: 15px,
    padding: "10px",
    fontFamily: "Bradley Hand, cursive"

};

const login = () => {
    return (
        
    <div className="login" >
        <form action="http://localhost:5000/login" method="POST">
            <h1>WELCOME TO MCD</h1>
                <div className="details" style={divStyle}>
                    <p>Phone Number</p>
                        <input type="text" placeholder="Enter Phonenumber" name="phonenumber" required/>
                            <br/>
                    <p>Name</p>
                        <input type="text" placeholder="Enter Name" name="name" required/>
                            <br/><br></br>
                        <input type="submit" value="Submit"/>
                        <br></br><br></br>
                </div>
        </form>
        <style jsx>{`
        input[type=text]{
            padding: 12px 8px;
            margin: 8px 0;
            display: inline-block;
            width: 75%;
            border: 1.7px solid black;
            background-color: #FFFFF0;
            color: black;
            box-sizing: border-box;
            transition: width 0.4s ease-in-out;
            
          }
          input[type=text]:focus {
            width: 85%
          }
          input[type=submit] {
            width: 75%;
            padding: 10px 15px;
            border: 2px ;
            border-radius: 35px; 
            background-color: #4CAF50;
            color: white;
            box-sizing: border-box;
          }
        h1 {
          text-align: center;
          font
          margin-bottom: 2rem;
           }
        .login{
            justify-content: center;
            flex-direction: row;
            text-align: left;
            margin: 50px 50px 40px;
             }
        form {
            text-align:center;
            border: 10px solid #FFD403;
          }
      `}</style>                

    </div>
    );
  };
  
  export default login;
  