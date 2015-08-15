var Post = React.createClass({
   render: function(){
       var post = this.props.post;
       var imgTag = null;
       var className = "post "+this.props.class;
       var divStyle = {};
       var url = "/blog/post/"+post.id+"/"+post.slug;
       var img = "";

       switch(post.type){
           case "text":
               imgTag = $(post.body).filter('img').first();
               img = imgTag[0].src;
               break;
           case "video":
               img = post.thumbnail_url;
               break;
           case "photo":
               break;
       }

       divStyle["backgroundImage"] = 'url('+img+')';

       return (
           <a href={url} className={className} style={divStyle}>
               <div className="overlay">
                   <h2 className="text-center vcenter">{post.title}</h2>
               </div>
           </a>
       );
   }

});