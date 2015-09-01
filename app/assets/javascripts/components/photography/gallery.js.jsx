var Gallery = React.createClass({
   getInitialState: function(){
       return {
           currentImage: 0,
           currentSubset: 0
       };
   },

   slide: function(subset, photo){
       console.log('clicked on image: '+subset+", "+photo);
   },
   render: function(){
       var numPhotos = this.props.photos.length;
       var numSets = Math.floor(numPhotos / this.props.pageSize);
       var subsets = [];

       numSets = numPhotos % this.props.pageSize > 0 ? numSets+1 : numSets;

       for(var i=0; i<numSets; i++){
           data = this.props.photos.slice(i*this.props.pageSize,i*this.props.pageSize+this.props.pageSize);
           subsets[i] = <Subset key={i} photos={data} handleClick={this.slide} index={i} />
       }
       return (
           <div id="photo-container">
               {subsets}
           </div>
       );
   }
});