var Gallery = React.createClass({
   getInitialState: function(){
       return {
           currentImage: 0,
           finished: false,
           photos: this.props.photos,
       };
   },
   changePhoto: function(index){
       this.setState({
           currentImage: index
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
            <Photos photos={this.state.photos} currentImage={this.state.currentImage} changePhoto={this.changePhoto}/>
           </div>
       );
   }
});