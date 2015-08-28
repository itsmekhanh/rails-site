var Photo = React.createClass({
    getInitialState: function(){
        return {
            active: 0
        }
    },
    render: function(){
        var overlay = "overlay "+this.props.active? "active":"";
        return (
            <div className="photo">
                <div class={overlay}>
                    <img src={this.props.url} />
                </div>
            </div>
        );
    }
});