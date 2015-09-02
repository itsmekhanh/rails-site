var Gallery = React.createClass({
   getInitialState: function(){
       return {
           currentImage: 0,
           finished: false,
           photos: this.props.photos,
       };
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
           <div id="photo-container">
               <Photos photos={this.state.photos} currentImage={this.state.currentImage}/>
               <div className="clearfix"></div>
           </div>
       );
   }
});