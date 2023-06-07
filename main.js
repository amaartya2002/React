// Creating a h1 element and putting inside the root




const heading = React.createElement("h1",{
    id: "h1-id" ,
    class: "first-tag",  // All these are attributes of the h1 tag
    ab: "xyz"
},"Namaste World from React")

console.log(heading)   // This is an Object or say a React Element

const root = ReactDOM.createRoot(document.getElementById("root"))

console.log(root)  // This is also an Object 

//root.render(heading)








/*

Create nested structure like this:

      <div id="parent">
         <div id="child">
            <h1>This is a h1 tag</h1>
            <h2>This is a h2 tag</h2>
         </div>
      </div>


*/


const parent = React.createElement("div",{
    id: "parent" 
},React.createElement("div",{
    id: "child"
},
[React.createElement("h1",{},"This is a h1 tag."),React.createElement("h2",{},"This is a h2 tag.")]))  // For same-level tags create array



// JSX


root.render(parent)