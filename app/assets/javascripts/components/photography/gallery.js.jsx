var Gallery = React.createClass({
   getInitialState: function(){
       return {
           currentImage: 1
       };
   },
   render: function(){
       return (
           <div>
               {this.props.photos}
           </div>
       );
   }
});