var Photo = React.createClass({
    clickPhoto: function(){
        this.props.clickPicture(this.props.index);
    },
    render: function(){
        var overlay = "overlay "+this.props.active? "active":"";
        return (
            <div className="photo" onClick={this.clickPhoto}>
                <div className={overlay}>
                </div>
                <img key={this.props.index} src={this.props.url}  />
            </div>
        );
    }
});