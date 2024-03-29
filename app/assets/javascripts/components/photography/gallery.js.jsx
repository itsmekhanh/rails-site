var Gallery = React.createClass({
   getInitialState: function(){
       return {
           currentImage: 0,
           finished: false,
           photos: this.props.photos,
       };
   },
   componentDidMount: function() {
       var that = this;
       $(document).keydown(function (e) {
           if (e.keyCode == 39) {
               if (this.state.currentImage < this.state.photos.length - 1) {
                   this.changePhoto(this.state.currentImage + 1);
               }
           }
           else if (e.keyCode == 37) {
               if (this.state.currentImage > 0) {
                   this.changePhoto(this.state.currentImage - 1);
               }
           }
       }.bind(this));

       $(window).scroll(function(){
           if($(this).scrollTop() > ($(document).height()-3000)){
               var next = $("#next-set");
               if(next.length){
                   next.remove();
                   that.getPhotos();
               }
           }

       });
   },
   changePhoto: function(index){
       // get more photos
       if(index >= this.state.photos.length-this.props.pageSize && !this.state.finished){
           this.getPhotos();
       }
       this.setState({
           currentImage: index,
       });
   },
   getPhotos: function(){
       var page = Math.ceil(this.state.photos.length/this.props.pageSize)+1;
       var photos = this.state.photos;

       if(this.isMounted()){
           if(!this.state.finished){
               $.get(this.props.url, {page: page}, function(data){
                   photos = photos.concat(data);
                   this.setState({
                       photos: photos,
                       finished: data.length < this.props.pageSize
                   });
                   if(!this.state.finished){
                       $(React.findDOMNode(this)).append("<div id='next-set'></div>");
                   }

               }.bind(this));
           }
       }

   },
   render: function(){
       return (
           <div>
               <Photos
                   photos={this.state.photos}
                   currentImage={this.state.currentImage}
                   changePhoto={this.changePhoto}
                   pageSize={this.props.pageSize}
               />
               <Thumbnails
                   thumbnails={this.props.thumbnails}
                   currentImage={this.state.currentImage}
                   changeThumbnail={this.changePhoto}
                   pageSize={this.props.pageSize}
               />
               <div id="next-set"></div>
           </div>

       );
   }
});