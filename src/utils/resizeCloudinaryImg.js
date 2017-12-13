const resizeCloudinaryImg = (image, resizeOptions) => {
  let optimisedImg = image.split('/');
  optimisedImg.splice(6, 0, resizeOptions);
  return optimisedImg = optimisedImg.join('/');
}

export default resizeCloudinaryImg;
