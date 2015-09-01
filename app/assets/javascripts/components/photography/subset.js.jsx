var Subset = React.createClass({
    render: function(){
        var photos = this.props.photos.map(function(photo, index){
            return <Photo url={photo["image_url"]} key={index}/>
        });

        return (
            <div className="subset">
                {photos}
            </div>
        )
    }
});