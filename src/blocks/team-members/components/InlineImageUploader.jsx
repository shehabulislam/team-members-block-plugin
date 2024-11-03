export default function InlineImageUploader({ src = "https://picsum.photos/200/300", alt }) {
  return (
    <>
      <img src={src} alt={alt} />
    </>
  );
}
