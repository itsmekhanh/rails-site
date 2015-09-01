var Subset = React.createClass({
    clickPhoto: function(photo){
        this.props.handleClick(this.props.index, photo);
    },
    render: function(){
        var that = this;
        var photos = this.props.photos.map(function(photo, index){
            return <Photo url={photo["image_url"]} key={index} index={index} clickPicture={that.clickPhoto} />
        });
        return (
            <div className="subset">
                {photos}
            </div>
        )
    }
});