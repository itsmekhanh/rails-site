var Photos = React.createClass({
    componentDidMount: function(){
        var active = $(React.findDOMNode(this)).find(".photo[data-index='"+this.props.currentImage+"']");
        var that = this;
        const breakpoint = 768;

        if(this.isMounted()){
            var $photos =  $(React.findDOMNode(that.refs.photos));
            active.find("img").load(function(){
                var element = $(this).parent();
                var offset = ($(window).width()-element.width())/2;
               $photos.css({left: offset-element.position().left});
            });

            $(window).resize(function(){
                if($(this).width() <= breakpoint){
                    $photos.css({left: 0});
                    that.scrollTo();
                }
            });
        }
    },
    componentDidUpdate: function(prevProps, prevState){
        if(this.isMounted()){
            var active = $(React.findDOMNode(this)).find(".photo[data-index='"+this.props.currentImage+"']");

            offset = ($(window).width()-active.width())/2;
            $(React.findDOMNode(this.refs.photos)).css({left: offset-active.position().left});
        }
    },
    scrollTo: function(){
        if(this.isMounted()){
            var active = $(React.findDOMNode(this.refs.photos)).find(".photo[data-index='"+this.props.currentImage+"']");
            $(window).scrollTop(active.position().top);
        }
    },
    handlingClick: function(e){
        this.props.changePhoto(parseInt(e.currentTarget.getAttribute("data-index")));
    },
    render: function(){

        var photos = [];
        var overlay = "";

        for(var i=0; i<this.props.photos.length; i++){
            overlay = i == this.props.currentImage ? "" : "active";
            overlay = ("overlay "+overlay).trim();
            photos[i] = (
                <div className="photo" key={i} onTouchStart={this.handlingClick} onClick={this.handlingClick} data-index={i} data-active={overlay}>
                    <div className={overlay}></div>
                    <img src={this.props.photos[i]["image_url"]}/>
                </div>
            );
        }
        return (
            <div id="photos" ref="photos">
                {photos}
            </div>
        );
    }
});