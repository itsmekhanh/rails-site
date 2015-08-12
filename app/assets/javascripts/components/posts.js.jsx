var Posts = React.createClass({
    render: function(){
        var posts = [];
        this.props.posts.forEach(function(post){
            posts.push(<Post post={post} key={post.id}/>);
        });
        return (
            <div>
                {posts}
            </div>
        );
    }
});