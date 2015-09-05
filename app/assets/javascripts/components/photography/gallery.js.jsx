var Gallery = React.createClass({
   getInitialState: function(){
       return {
           currentImage: 0,
           finished: false,
           photos: this.props.photos,
       };
   },
   componentDidMount: function(){
       $(document).keydown(function(e){
          if(e.keyCode == 39){
              if(this.state.currentImage < this.state.photos.length-1){
                  this.changePhoto(this.state.currentImage+1);
              }
          }
          else if (e.keyCode == 37){
            if(this.state.currentImage > 0){
                this.changePhoto(this.state.currentImage-1);
            }
          }
       }.bind(this));
   },
   changePhoto: function(index){
       var page = Math.floor(this.state.photos.length/this.props.pageSize)+1
       var photos = this.state.photos;

       // get more photos
       if(index > this.state.photos.length-5 && !this.state.finished){
           $.get(this.props.url, {page: page}, function(data){
               photos = photos.concat(data);
               this.setState({
                   photos: photos,
                   finished: data.length < this.props.pageSize
               });
           }.bind(this));
       }

       this.setState({
           currentImage: index,
       });
   },
   render: function(){
       return (
           <div>

               <Thumbnails
                   thumbnails={this.props.thumbnails}
                   currentImage={this.state.currentImage}
                   changeThumbnail={this.changePhoto}
               />
           </div>
       );
   }
});