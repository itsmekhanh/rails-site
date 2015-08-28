var Gallery = React.createClass({
   getInitialState: function(){
       return {
           currentImage: 1
       };
   },
   render: function(){
       var numPhotos = this.props.count;
       var numSets = numPhotos / this.props.photosPerSet;
       var subsets = [];

       numSets = numPhotos % this.props.photosPerSet > 0 ? numSets+1 : numSets;

       for(var i=0; i<numSets; i++){
           subsets[i] = <Subset key=i photos={SOMETHING HERE}/>
       }

       return (
           <div>

           </div>
       );
   }
});