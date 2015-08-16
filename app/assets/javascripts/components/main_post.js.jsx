var MainPost = React.createClass({
    render: function(){
        var img = "";
        var divStyle = {};
        var body = "";
        var textPost = null;

        post = this.props.post;

        switch(post.type){
            case "text":
                var $body = $("<div>"+post.body+"</div>");
                var imgTag = $body.find("img").first();

                $body.find('img').first().remove();
                img = imgTag[0].src;
                body = $body.html();
                divStyle['backgroundImage'] = 'url('+img+')';
                textPost = (
                    <div id="main-image" style={divStyle}>
                        <div className="overlay">
                            <div className="text-center vcenter">
                                <h2>{post.title}</h2>
                                <h3>{post.date}</h3>
                            </div>
                        </div>
                    </div>
                );
                break;
            case "video":
                body = post.body;
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
            <div id="main-post">
                { textPost }
                <div id="post" dangerouslySetInnerHTML={{__html: body}} />
            </div>
        );
    }
});