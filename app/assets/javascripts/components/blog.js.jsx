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
                <Posts posts={this.props.posts} />
            </div>
        );
    }
});