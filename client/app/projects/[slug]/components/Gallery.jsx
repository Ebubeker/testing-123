import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = ({images}) => {
  return (
    <div>
      <br />
      <h3>Gallery of the project ({images.length})</h3>
      <br />
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        {images.map((image, indx)=> (
          <a key={indx} href={`${process.env.NEXT_PUBLIC_CMS_BASE}${image.url}`}>
          <img
            src={`${process.env.NEXT_PUBLIC_CMS_BASE}${image.url}`}
            alt=""
          />
        </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;
