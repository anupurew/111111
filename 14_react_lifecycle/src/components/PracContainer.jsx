export default function PracContainer({ children }) {
  return (
    <>
      <header>PostList</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}

//<PracContainer>
//   작성된 컨텐트가 children <div>안녕</div>

//</PracContainer>;
