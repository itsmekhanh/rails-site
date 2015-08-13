var Post = React.createClass({
   render: function(){
       var post = this.props.post;
       var body;
       var caption;

       switch(post.type){
           case "text":
               body = post.body;
               break;
           case "video":
               body = post.player[2];
               break;
           case "photo":
               break;
           case "audio":
               break;
           case "quote":
               break;
       }

       var html = $(body);
       var img = html.filter('img');

       return (
           <div className="post" dangerouslySetInnerHTML={{__html: body}} />
       );
   }

});