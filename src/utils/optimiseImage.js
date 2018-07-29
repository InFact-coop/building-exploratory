const optimiseImage = (image, options) => {
  let optimisedImg = image.split("/");
  optimisedImg.splice(6, 0, options);
  return (optimisedImg = optimisedImg.join("/"));
};

export default optimiseImage;
