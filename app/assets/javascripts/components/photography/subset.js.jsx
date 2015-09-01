var Subset = React.createClass({
    render: function(){

        var photos = this.props.photos.map(function(photo){
            return <Photo url={photo["image_url"]} />
        });

        return (
            <div>
                {photos}
            </div>
        )
    }
});