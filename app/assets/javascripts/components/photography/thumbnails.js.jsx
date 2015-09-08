var Thumbnails = React.createClass({
    getInitialState: function(){
        return {
            currentSet: 0
        }
    },
    componentDidUpdate: function(){
        var subset = Math.floor(this.props.currentImage / this.props.pageSize);
        if(subset != this.state.currentSet){
            this.state.currentSet = subset;
            var thumbnailContainer = $(React.findDOMNode(this.refs.thumbnails));
            var active = thumbnailContainer.find(".photo-thumbnail[data-index='"+(subset*this.props.pageSize)+"']");
            thumbnailContainer.css({left: -active.position().left});
        }
    },
    slidePrev: function(){
        var page = Math.floor(this.props.currentImage / this.props.pageSize);
        if(page > 0){
            this.props.changeThumbnail(this.props.pageSize*(page)-1);
        }
    },
    slideNext: function(){
        var page = Math.floor(this.props.currentImage / this.props.pageSize);
        var nextImage = this.props.pageSize*(page+1);
        if( nextImage < this.props.thumbnails.length){
            this.props.changeThumbnail(nextImage);
        }
    },
    handleClick: function(e){
        this.props.changeThumbnail(parseInt(e.currentTarget.getAttribute("data-index")));
    },
    render: function(){
        var thumbnails = [];
        var overlay = "";
        var previous = "glyphicon glyphicon-menu-left";
        var next = "glyphicon glyphicon-menu-right";

        previous += this.props.currentImage < this.props.pageSize ? " hidden" : "";
        next += this.props.thumbnails.length - this.props.currentImage < this.props.pageSize ? " hidden" : "";

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
            <div id="slider">
                <div className="slide">
                    <span className={previous} onClick={this.slidePrev}></span>
                </div>
                <div id="slider-container">
                    <div id="thumbnails" ref="thumbnails">
                        {thumbnails}
                    </div>
                </div>
                <div className="slide">
                    <span className={next} onClick={this.slideNext}></span>
                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
});