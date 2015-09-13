var Post = React.createClass({
   render: function(){
       var post = this.props.post;
       var imgTag = null;
       var className = "post cover-background "+this.props.class;
       var divStyle = {};
       var url = "/blog/post/"+post.id+"/"+post.slug;
       var img = "";

       divStyle["backgroundImage"] = 'url('+post.main_image+')';

       return (
           <a href={url} className={className} style={divStyle}>
               <div className="overlay">
                   <div className="border">
                       <h2 className="text-center vcenter">
                           {post.title}
                           <hr/>
                           <div className="date">
                               {post.date}
                           </div>
                       </h2>
                   </div>
               </div>
           </a>
       );
   }

});