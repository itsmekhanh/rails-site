var Posts = React.createClass({
    render: function(){
        var posts = [];
        var i;
        var index = 0;

        for(i=0; i<this.props.posts.length; i++){
            post = this.props.posts[i];
            if(index === 0 || (index == 1 && i+1 >= this.props.posts.length)){
                posts.push(<Post post={post} key={post.id} class="full"/>);
            }else{
                posts.push(<Post post={post} key={post.id} class="half"/>)
            }
            index++;
            if(index > 2){
                index = 0;
            }
        }

        return (
            <div>
                {posts}
            </div>
        );
    }
});