var Thumbnails = React.createClass({
    componentDidUpdate: function(){
        if(this.props.currentImage % this.props.pageSize === 0 || this.props.currentImage % this.props.pageSize === this.props.pageSize-1){
            var thumbnailContainer = $(React.findDOMNode(this.refs.thumbnails));
            var active = thumbnailContainer.find(".photo-thumbnail[data-index='"+this.props.currentImage+"']");
            thumbnailContainer.css({left: active.position().left});
        }
    },
    handleClick: function(e){
        this.props.changeThumbnail(parseInt(e.currentTarget.getAttribute("data-index")));
    },
    render: function(){
        var thumbnails = [];
        var overlay = "";

        for(var i=0; i<this.props.thumbnails.length; i++){
            overlay = i == this.props.currentImage? "" : "active";
            overlay = ("overlay "+overlay).trim();

            var style = {
                backgroundImage: "url('"+this.props.thumbnails[i]["image_url"]+"')"
            };

            thumbnails[i] = (
                <div className="photo-thumbnail" key={i} data-index={i} data-active={overlay} onClick={this.handleClick} style={style}>
                    <div className={overlay}></div>
                </div>
            );
        }

        return (
            <div id="thumbnail-container" className="center-block">
                <div id="thumbnails" ref="thumbnails">
                    {thumbnails}
                </div>
            </div>

        );
    }
});