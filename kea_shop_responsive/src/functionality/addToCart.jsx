export default function addTocart(props, setBasket) {
  {
    console.log({ props });
    setBasket((oldBasket) => oldBasket.concat([props]));
  }
}
