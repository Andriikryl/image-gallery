export default function Home() {
  return (
    <main className="">
      {[...Array(19).keys()].map((_, index) => {
        return <img key={index} src={`/images/${index}.jpg`}></img>;
      })}
    </main>
  );
}
