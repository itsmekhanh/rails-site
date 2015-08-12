var MainPost = React.createClass({
    render: function(){

        post = this.props.post
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

        return (
            <div id="main-post" dangerouslySetInnerHTML={{__html: body}} />
        );
    }
});