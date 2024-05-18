

/*
*
  <div id="parent">
      <div id="child">
       <h1>Ram ram React bhai</h1>
      </div>
  </div>
*
*/

/*
*
  <div id="parent">
      <div id="child1">
       <h1>Ram ram React bhai</h1>
       <h2>Ram Ram Ji</h2>
      </div>
      <div id="child2">
       <h1>Ram ram React bhai</h1>
       <h2>Ram Ram Ji</h2>
      </div>
  </div>
*
*/

// const heading = React.createElement(
//     "div",
//     {id:"parent"},
//      React.createElement(
//         "div",
//         {id:'child'},
//         React.createElement('h1',{},"Ram Ram Ract bhai!")
//     ));


const heading = React.createElement('div',{id:'parent'},
[React.createElement('div',{id:'child1'},
[React.createElement('h1',{},'Ram Ram React Bhai!'),React.createElement('h2',{},'Ram Ram Ji!')]
),
React.createElement('div',{id:'child2'},
[React.createElement('h1',{},'Ram Ram React Bhai!'),React.createElement('h2',{},'Ram Ram Ji!')]
)]);
//console.log(heading) // object;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);