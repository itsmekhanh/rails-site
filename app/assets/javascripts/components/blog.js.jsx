var Blog = React.createClass({
    getInitialState: function(){
        return {
            currentPost: null,
            filterType: null
        }
    },
    render: function(){
        blog = this.props.blog;
        return (
            <div>
                <MainPost post={this.state.currentPost}/>
                <Posts posts={blog.posts} />
            </div>
        );
    }
});