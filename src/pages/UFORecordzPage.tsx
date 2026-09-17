
import 10KWManifestive from "../data/images/ufo-recordz/10KW - MANIFESTIVE 26.jpg";
import SDRAVEfoule from "../data/images/ufo-recordz/SDRAVEfoulejpg";
import SDRAVEfoule2 from "../data/images/ufo-recordz/SDRAVEfoule2.jpg";
import photo04 from "../data/images/ufo-recordz/photo-04.jpg";


const photos = [
  10KWManifestive,
  SDRAVEfoule,
  SDRAVEfoule2,
  photo04,
];


<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="md:col-span-2">
    <img
      src={photos[0]}
      className="w-full h-full object-cover"
    />
  </div>

  <div className="flex flex-col gap-4">
    <img
      src={photos[1]}
      className="w-full object-cover"
    />

    <img
      src={photos[3]}
      className="w-full object-cover"
    />
  </div>
</div>