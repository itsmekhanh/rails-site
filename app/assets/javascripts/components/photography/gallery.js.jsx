var Gallery = React.createClass({
   getInitialState: function(){
       return {
           currentImage: 0,
           finished: false,
           photos: this.props.photos,
           position: 0,
       };
   },
   changePhoto: function(index, position){

       // get more photos
       if(index > this.props.photos.length-5 && !finished){
           $.get(this.props.url, function(data){

           });
       }

       this.setState({
           currentImage: index,
           position: position
       });
   },
   componentDidMount(){
       //$.get(this.props.source, function(photos){
       //    if (photos){
       //        this.setState({
       //           photos: this.state.photos.concat(photos)
       //        });
       //    }else{
       //        this.setState({
       //            finished: true
       //        });
       //    }
       //}.bind(this));
   },
   render: function(){
       return (
           <div>
            <Photos photos={this.state.photos} currentImage={this.state.currentImage} changePhoto={this.changePhoto}
                position = {this.state.position}
                />
           </div>
       );
   }
});