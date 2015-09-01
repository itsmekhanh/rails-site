var Gallery = React.createClass({
   getInitialState: function(){
       return {
           currentImage: 1
       };
   },
   render: function(){
       var numPhotos = this.props.photos.length;
       var numSets = Math.floor(numPhotos / this.props.pageSize);
       var subsets = [];

       numSets = numPhotos % this.props.pageSize > 0 ? numSets+1 : numSets;

       sets = [];

       for(var i=0; i<numSets; i++){

           data = this.props.photos.slice(i*this.props.pageSize,i*this.props.pageSize+this.props.pageSize);
       }
       return (
           <div>
               <Subset photos={data} />
           </div>
       );
   }
});