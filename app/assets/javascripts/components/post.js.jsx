var Post = React.createClass({
   render: function(){
       return (
           <div>
               {this.props.post.caption}
           </div>
       );
   }

});