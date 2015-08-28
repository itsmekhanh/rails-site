var Blog = React.createClass({
    getInitialState: function(){
        return {
            currentPost: null,
            filterType: null
        }
    },
    render: function(){
        return (
            <div>
                <Posts posts={this.props.posts} />
            </div>
        );
    }
});