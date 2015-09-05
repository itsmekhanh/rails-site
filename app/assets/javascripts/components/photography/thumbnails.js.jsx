var Thumbnails = React.createClass({
    handleClick: function(e){
        console.log(e.currentTarget);
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
            <div id="thumbnail-container">
                <div id="thumbnails" ref="thumbnails">
                    {thumbnails}
                </div>
            </div>

        );
    }
});