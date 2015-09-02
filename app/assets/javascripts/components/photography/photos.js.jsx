var Photos = React.createClass({
    handlingClick: function(e){
        this.props.changePhoto(e.currentTarget.getAttribute("data-index"));
    },
    render: function(){
        var currentImage = this.props.currentImage;
        var photos = [];
        var overlay = "";

        for(var i=0; i<this.props.photos.length; i++){
            overlay = i == this.props.currentImage ? "" : "active";
            overlay = "overlay "+overlay;
            photos[i] = (
                <div className="photo" key={i} onClick={this.handlingClick} data-index={i}>
                    <div className={overlay}></div>
                    <img src={this.props.photos[i]["image_url"]}/>
                </div>
            );
        }
        return (
            <div id="photos">
                {photos}
            </div>
        );
    }
});