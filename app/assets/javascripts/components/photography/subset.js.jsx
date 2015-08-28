var Subset = React.createClass({
    render: function(){
        return (
            <div key={this.props.id} className="float-left">
                {
                    this.props.photos.map(function(photo){
                        return <Photo key={photo.id} />
                    })
                }
            </div>
        )
    }
});