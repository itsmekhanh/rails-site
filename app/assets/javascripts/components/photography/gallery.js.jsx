var Gallery = React.createClass({
   getInitialState: function(){
       return {
           currentImage: 0,
           finished: false,
           photos: this.props.photos,
           position: 0,
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
       
       if(this.isMounted()){
           var active = $(React.findDOMNode(this)).find("#photos .photo[data-index='"+index+"']");
           var offset = ($(window).width()-active.width())/2;
       }

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
           position: offset-active.position().left,
       });
   },
   keyDown: function(e){
       console.log(e);
   },
   render: function(){
       return (
           <div>
            <Photos
                photos={this.state.photos}
                currentImage={this.state.currentImage}
                changePhoto={this.changePhoto}
                position = {this.state.position}

            />
           </div>
       );
   }
});