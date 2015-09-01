var Photo = React.createClass({
    render: function(){
        var overlay = "overlay "+this.props.active? "active":"";
        return (
            <div className="photo">
                <div class={overlay}>
                </div>
                <img src={this.props.url} />
            </div>
        );
    }
});