var Post = React.createClass({
   render: function(){
       var post = this.props.post;
       var imgTag = null;
       var img = "";
       var className = "post "+this.props.class;

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
           case "audio":
               break;
           case "quote":
               break;
       }

       return (
           <div className={className}>
               <img className="post-image" src={img}/>
           </div>
       );
   }

});