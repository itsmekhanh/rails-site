var Photos = React.createClass({
    render: function(){

        var photos = this.props.photos.map(function(photo, index){
            return(
                <div className="photo">
                    <div className="overlay"></div>
                    <img src={photo.image_url}/>
                </div>
            );
        });

        return (
            <div id="photos">
                {photos}
            </div>
        );
    }
});