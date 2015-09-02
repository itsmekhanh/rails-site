var Photos = React.createClass({
    componentDidMount: function(){
        var active = $(React.findDOMNode(this)).find(".photo[data-active='overlay']");
        var that = this;

        active.find("img").load(function(){
            var element = $(this).parent();
            var offset = ($(window).width()-element.width())/2;
            $(React.findDOMNode(that.refs.photos)).css({left: offset-element.position().left});
        });


    },
    handlingClick: function(e){
        var active = $(e.currentTarget);
        var offset = ($(window).width()-active.width())/2;
        this.props.changePhoto(e.currentTarget.getAttribute("data-index"),offset-active.position().left);
    },
    render: function(){
        var currentImage = this.props.currentImage;
        var photos = [];
        var overlay = "";
        var style = {
            left: this.props.position+"px"
        }

        for(var i=0; i<this.props.photos.length; i++){
            overlay = i == this.props.currentImage ? "" : "active";
            overlay = ("overlay "+overlay).trim();
            photos[i] = (
                <div className="photo" key={i} onClick={this.handlingClick} data-index={i} data-active={overlay}>
                    <div className={overlay}></div>
                    <img src={this.props.photos[i]["image_url"]}/>
                </div>
            );
        }

        return (
            <div id="photos" style={style} ref="photos">
                {photos}
            </div>
        );
    }
});