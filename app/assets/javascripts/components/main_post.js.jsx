var MainPost = React.createClass({
    render: function(){
        var img = "";
        var divStyle = {};
        var body = "";

        post = this.props.post
        var $body = $("<div>"+post.body+"</div>");

        switch(post.type){
            case "text":
                var imgTag = $body.find("img").first();
                $body.find('img').first().remove();
                img = imgTag[0].src;
                body = $body.html();
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

        divStyle['backgroundImage'] = 'url('+img+')';

        return (
            <div id="main-post">
                <div id="main-image" style={divStyle}>
                    <div className="overlay">
                        <div className="text-center vcenter">
                            <h2>{post.title}</h2>
                            <h3>{post.date}</h3>
                        </div>
                    </div>
                </div>
                <div id="post" dangerouslySetInnerHTML={{__html: body}} />
            </div>
        );
    }
});