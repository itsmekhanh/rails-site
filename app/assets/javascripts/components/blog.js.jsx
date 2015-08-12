var Blog = React.createClass({
    getInitialState: function(){
        return {
            currentPost: null,
            filterType: null
        }
    },
    render: function(){
        posts = this.props.posts;
        return (
            <div>
                <MainPost post={this.props.posts[0]} />
            </div>
        );
    }
});