// const parent = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"}),
//     React.createElement("h1",{},"I am a h1 tag from react js "))


// now suppose we have to make it nested 
// <div id="parent">
       //  <div id="child">
           //  <h1>I am h1 tag</h1>
        // </div>
// </div>

// so make like this 

const parent = React.createElement("div",{id:"parent"},
    // now if u have to create two siblings like im h2 tag also 
    React.createElement("div",{id:"child"}),[
        React.createElement("h1",{},"I am a h1 tag from react js "),
        React.createElement("h2",{},"I am a h2 tag from react js ")
    ]
    
)


const heading = React.createElement("h1",{id:"parent"},"Hello world from react")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

console.log(parent) // its object not a html tag 