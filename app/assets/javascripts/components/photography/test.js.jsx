var Test = React.createClass({
   clicked: function(){
       console.log("CLICKEEDDDD");
   },
   render: function(){
       return (
           <div className="test" onClick={this.clicked}>
                There is something here.
           </div>
       );
   }
});